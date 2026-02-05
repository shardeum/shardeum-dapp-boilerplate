import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers, BrowserProvider, Eip1193Provider } from 'ethers';
import { SHARDEUM_TESTNET } from '../config/networks';

interface WalletContextType {
  account: string | null;
  chainId: string | null;
  provider: BrowserProvider | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  switchNetwork: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

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

    checkConnection();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          disconnectWallet();
        }
      });

      window.ethereum.on('chainChanged', (chainId: string) => {
        setChainId(chainId);
        window.location.reload();
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
        window.ethereum.removeAllListeners('chainChanged');
      }
    };
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum as Eip1193Provider);
      const accounts = await provider.send('eth_requestAccounts', []);

      setAccount(accounts[0]);
      setProvider(provider);

      const network = await provider.getNetwork();
      setChainId('0x' + network.chainId.toString(16));
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setProvider(null);
    setChainId(null);
  };

  const switchNetwork = async () => {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SHARDEUM_TESTNET.chainId }],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [SHARDEUM_TESTNET],
          });
        } catch (addError) {
          console.error('Failed to add network:', addError);
        }
      } else {
        console.error('Failed to switch network:', switchError);
      }
    }
  };

  return (
    <WalletContext.Provider
      value={{
        account,
        chainId,
        provider,
        connectWallet,
        disconnectWallet,
        switchNetwork
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

// Extend Window type for TypeScript
declare global {
  interface Window {
    ethereum?: Eip1193Provider;
  }
}
