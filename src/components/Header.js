import Link from 'next/link';  
import { ethers } from 'ethers';
import { Layout, Button, Modal, Space, Typography } from 'antd';
import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';


const { Header } = Layout;
const { Text  } = Typography;


const WalletHeader = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [visible, setVisible] = useState(false);
  const [connected, setConnected] = useState(false);

  const desiredNetwork = 80001; 
  const router = useRouter();

  useEffect(() => {
      const init = async () => {
          const provider = await detectEthereumProvider();
          if (provider) {
              provider.on('chainChanged', handleChainChanged);
              provider.on('accountsChanged', handleAccountsChanged);
          }
      };
      init();

      return () => {
          if (window.ethereum.removeListener) {
              window.ethereum.removeListener('chainChanged', handleChainChanged);
              window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          }
      }
  }, []);

  const handleChainChanged = (_chainId) => {
      window.location.reload();
  };

  const handleAccountsChanged = async (accounts) => {
      if (accounts.length === 0) {
          setSelectedAddress(null);
          setBalance(null);
          setConnected(false);
      } else if (accounts[0] !== selectedAddress) {
          setSelectedAddress(accounts[0]);
          await updateBalance(accounts[0]);
          setConnected(true);
      }
  };

  async function updateBalance(account) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(account);
      setBalance(ethers.utils.formatEther(balance));
  }

  async function connectWallet() {
      if (window.ethereum) {
          try {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const chainId = await provider.getNetwork().then(network => network.chainId);
              if (chainId !== desiredNetwork) {
                  Modal.warning({
                      title: 'Wrong Network',
                      content: 'Please connect to the Shardeum Sphinx Dapp network.',
                  });
                  return;
              }

              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              setSelectedAddress(accounts[0]);
              await updateBalance(accounts[0]);
              setVisible(true);
              setConnected(true);
          } catch (error) {
              console.error(error);
          }
      } else {
          Modal.error({
              title: 'Metamask is not installed',
              content: 'Please install it from https://metamask.io',
          });
      }
  }

  function disconnectWallet() {
      setSelectedAddress(null);
      setBalance(null);
      setVisible(false);
      setConnected(false);
  }

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/">
        <img src="/logo.png" alt="Logo" style={{ height: '256px', marginRight: '10px', marginTop: '30px' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '20px' }}>
        <Link href="/" style={{ color: router.pathname === '/' ? 'yellow' : 'white', cursor: 'pointer' }}>Home</Link>
        <Link href="/rpc" style={{ color: router.pathname === '/rpc' ? 'yellow' : 'white', cursor: 'pointer' }}>RPC</Link>
        <Link href="/nft" style={{ color: router.pathname === '/nft' ? 'yellow' : 'white', cursor: 'pointer'  }}>NFT</Link>
        <Link href="/defi" style={{ color: router.pathname === '/defi' ? 'yellow' : 'white', cursor: 'pointer'  }}> DeFi  </Link>  
        </nav>
        {connected ? (
            <Space direction="horizontal" align="center">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', marginRight: '10px' }}>
                    <Text style={{ color: 'white', marginBottom: '5px' }}>
                        {selectedAddress.slice(0, 6) + "..." + selectedAddress.slice(-4)}
                    </Text>
                    <Text style={{ color: 'white' }}>
                        {balance.slice(0,5)} SHM
                    </Text>
                </div>
                <Button type="primary" shape="circle" icon={<WalletOutlined />} onClick={() => setVisible(true)} />
            </Space>
        ) : (
            <Button type="primary" onClick={connectWallet}>Connect Wallet</Button>
        )}
        <Modal
            title="Wallet Info"
            open={visible}
            onCancel={() => setVisible(false)}
            footer={[
              <Button key="back" onClick={disconnectWallet}>Disconnect Wallet</Button>,
            ]}
        >
            <Space direction="vertical">
                <Text>Address: {selectedAddress}</Text>
                <Text>Balance: {balance} SHM</Text>
                <Button href="https://docs.shardeum.org/faucet/claim" target="_blank">Claim Testnet SHM</Button>
            </Space>
        </Modal>
    </Header>
);

}

export default WalletHeader;
