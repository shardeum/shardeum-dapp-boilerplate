import { useState, useEffect } from 'react';
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
  const [txHash, setTxHash] = useState('');

  useEffect(() => {
    if (account && provider) {
      loadTokenInfo();
      loadBalance();
    }
  }, [account, provider]);

  const loadTokenInfo = async () => {
    if (!provider) return;

    try {
      const contract = new Contract(TOKEN_ADDRESS, ERC20_ABI, provider);
      const name = await contract.name();
      const symbol = await contract.symbol();

      setTokenName(name);
      setTokenSymbol(symbol);
    } catch (error) {
      console.error('Failed to load token info:', error);
    }
  };

  const loadBalance = async () => {
    if (!provider || !account) return;

    try {
      const contract = new Contract(TOKEN_ADDRESS, ERC20_ABI, provider);
      const balance = await contract.balanceOf(account);
      setBalance(ethers.formatEther(balance));
    } catch (error) {
      console.error('Failed to load balance:', error);
    }
  };

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!provider || !account) return;

    setLoading(true);
    setTxHash('');

    try {
      const signer = await provider.getSigner();
      const contract = new Contract(TOKEN_ADDRESS, ERC20_ABI, signer);

      const tx = await contract.transfer(
        recipient,
        ethers.parseEther(amount)
      );

      setTxHash(tx.hash);

      await tx.wait();

      alert('Transfer successful!');
      loadBalance();
      setRecipient('');
      setAmount('');
    } catch (error: any) {
      console.error('Transfer failed:', error);
      alert('Transfer failed: ' + error.message);
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

  return (
    <div className="card">
      <h2>{tokenName} ({tokenSymbol})</h2>

      <div className="balance">
        <p>Your Balance:</p>
        <h3>{balance} {tokenSymbol}</h3>
      </div>

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
