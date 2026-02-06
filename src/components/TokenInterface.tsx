import { useState, useEffect, useCallback } from 'react';
import { ethers, Contract } from 'ethers';
import { useWallet } from '../context/WalletContext';
import { TOKEN_ADDRESS } from '../config/networks';
import { ERC20_ABI } from '../config/erc20Abi';

export function TokenInterface() {
  const { account, provider } = useWallet();
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [balance, setBalance] = useState('0');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingTokenInfo, setLoadingTokenInfo] = useState(true);
  const [txHash, setTxHash] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const loadTokenInfo = useCallback(async () => {
    if (!provider) return;

    setLoadingTokenInfo(true);
    setError(null);

    try {
      const contract = new Contract(TOKEN_ADDRESS, ERC20_ABI, provider);
      const name = await contract.name();
      const symbol = await contract.symbol();

      setTokenName(name);
      setTokenSymbol(symbol);
    } catch (err: any) {
      console.error('Failed to load token info:', err);
      setError(
        'Failed to load token information. Please ensure the contract is deployed and you are on the correct network.'
      );
    } finally {
      setLoadingTokenInfo(false);
    }
  }, [provider]);

  const loadBalance = useCallback(async () => {
    if (!provider || !account) return;

    try {
      const contract = new Contract(TOKEN_ADDRESS, ERC20_ABI, provider);
      const balance = await contract.balanceOf(account);
      setBalance(ethers.formatEther(balance));
    } catch (err: any) {
      console.error('Failed to load balance:', err);
      setError('Failed to load balance. Please check your connection.');
    }
  }, [provider, account]);

  useEffect(() => {
    if (account && provider) {
      loadTokenInfo();
      loadBalance();
    }
  }, [account, provider, loadTokenInfo, loadBalance]);

  const validateTransfer = (): string | null => {
    // Validate recipient address
    if (!ethers.isAddress(recipient)) {
      return 'Invalid recipient address';
    }

    // Validate amount is a positive number
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return 'Amount must be greater than 0';
    }

    // Validate sufficient balance
    if (parsedAmount > parseFloat(balance)) {
      return 'Insufficient balance';
    }

    return null;
  };

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!provider || !account) return;

    // Clear previous messages
    setError(null);
    setSuccess(null);
    setTxHash('');

    // Validate inputs
    const validationError = validateTransfer();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const signer = await provider.getSigner();
      const contract = new Contract(TOKEN_ADDRESS, ERC20_ABI, signer);

      const tx = await contract.transfer(
        recipient,
        ethers.parseEther(amount)
      );

      setTxHash(tx.hash);
      setSuccess('Transaction submitted! Waiting for confirmation...');

      await tx.wait();

      setSuccess(`Successfully transferred ${amount} ${tokenSymbol} to ${recipient.slice(0, 6)}...${recipient.slice(-4)}`);
      loadBalance();
      setRecipient('');
      setAmount('');
    } catch (err: any) {
      console.error('Transfer failed:', err);

      // Parse common error messages
      let errorMessage = 'Transfer failed';
      if (err.code === 'ACTION_REJECTED') {
        errorMessage = 'Transaction was rejected by user';
      } else if (err.message.includes('insufficient funds')) {
        errorMessage = 'Insufficient funds for gas';
      } else if (err.message) {
        errorMessage = `Transfer failed: ${err.message}`;
      }

      setError(errorMessage);
      setTxHash('');
    } finally {
      setLoading(false);
    }
  };

  if (!account) {
    return (
      <div className="card">
        <h2>Token Interface</h2>
        <p>Please connect your wallet to use the token interface.</p>
      </div>
    );
  }

  if (loadingTokenInfo) {
    return (
      <div className="card">
        <h2>Token Interface</h2>
        <p>Loading token information...</p>
      </div>
    );
  }

  if (error && !tokenName) {
    return (
      <div className="card">
        <h2>Token Interface</h2>
        <div className="error-box">
          <p>❌ {error}</p>
          <button onClick={loadTokenInfo} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>{tokenName || 'Token'} ({tokenSymbol || '---'})</h2>

      <div className="balance">
        <p>Your Balance:</p>
        <h3>{balance} {tokenSymbol}</h3>
      </div>

      {error && (
        <div className="error-box">
          <p>❌ {error}</p>
          <button onClick={() => setError(null)} className="close-btn">✕</button>
        </div>
      )}

      {success && (
        <div className="success-box">
          <p>✅ {success}</p>
          <button onClick={() => setSuccess(null)} className="close-btn">✕</button>
        </div>
      )}

      <form onSubmit={handleTransfer} className="transfer-form">
        <h3>Transfer Tokens</h3>

        <div className="form-group">
          <label>Recipient Address:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="0x..."
            required
          />
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            step="0.000001"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Transfer'}
        </button>

        {txHash && (
          <div className="tx-hash">
            <p>Transaction Hash:</p>
            <a
              href={`https://explorer-mezame.shardeum.org/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {txHash.slice(0, 10)}...{txHash.slice(-8)}
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
