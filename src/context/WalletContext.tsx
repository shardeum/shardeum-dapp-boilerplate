import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers, BrowserProvider, Eip1193Provider } from 'ethers';
import { SHARDEUM_TESTNET } from '../config/networks';

interface WalletContextType {
  account: string | null;
  chainId: string | null;
  provider: BrowserProvider | null;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  switchNetwork: () => Promise<void>;
  clearError: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Check if wallet is connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum as Eip1193Provider);
        const accounts = await provider.send('eth_accounts', []);

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setProvider(provider);

          const network = await provider.getNetwork();
          setChainId('0x' + network.chainId.toString(16));
        }
      }
    };

    // Store handler references for proper cleanup
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        disconnectWallet();
      }
    };

    const handleChainChanged = async (newChainId: string) => {
      setChainId(newChainId);
      // Re-initialize provider instead of full page reload
      if (window.ethereum) {
        try {
          const newProvider = new ethers.BrowserProvider(window.ethereum as Eip1193Provider);
          setProvider(newProvider);
          const accounts = await newProvider.send('eth_accounts', []);
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (err) {
          console.error('Failed to reinitialize provider:', err);
        }
      }
    };

    checkConnection();

    // Listen for account and chain changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('Please install MetaMask to use this dApp!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum as Eip1193Provider);
      const accounts = await provider.send('eth_requestAccounts', []);

      setAccount(accounts[0]);
      setProvider(provider);

      const network = await provider.getNetwork();
      setChainId('0x' + network.chainId.toString(16));
      setError(null);
    } catch (err: any) {
      console.error('Failed to connect wallet:', err);
      setError(err.message || 'Failed to connect wallet');
    }
  };

  const disconnectWallet = async () => {
    // Try to properly revoke permissions (MetaMask 11.0+)
    try {
      await window.ethereum?.request({
        method: 'wallet_revokePermissions',
        params: [{ eth_accounts: {} }],
      });
    } catch (err) {
      // Fallback for wallets that don't support revokePermissions
      // Note: This only clears local state. MetaMask will still consider the site connected
      // and will auto-reconnect on page reload. This is a MetaMask limitation.
      console.log('wallet_revokePermissions not supported, clearing local state only');
    }

    setAccount(null);
    setProvider(null);
    setChainId(null);
    setError(null);
  };

  const switchNetwork = async () => {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SHARDEUM_TESTNET.chainId }],
      });
      setError(null);
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [SHARDEUM_TESTNET],
          });
          setError(null);
        } catch (addError: any) {
          console.error('Failed to add network:', addError);
          setError(addError.message || 'Failed to add network');
        }
      } else {
        console.error('Failed to switch network:', switchError);
        setError(switchError.message || 'Failed to switch network');
      }
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <WalletContext.Provider
      value={{
        account,
        chainId,
        provider,
        error,
        connectWallet,
        disconnectWallet,
        switchNetwork,
        clearError
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

// Extend Window type for TypeScript with proper event listener support
declare global {
  interface Window {
    ethereum?: Eip1193Provider & {
      on(event: string, handler: (...args: any[]) => void): void;
      removeListener(event: string, handler: (...args: any[]) => void): void;
      removeAllListeners(event: string): void;
    };
  }
}
