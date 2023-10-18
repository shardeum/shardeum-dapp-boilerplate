import { Layout, Button, Modal, Space, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

const WalletHeader = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [visible, setVisible] = useState(false);
  const [connected, setConnected] = useState(false);

  const desiredNetwork = 8082; 

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
                      content: 'Please connect to the Shardeum Sphinx network.',
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
            <img src="/logo.png" alt="Logo" style={{ height: '256px', marginRight: '10px' }} /> 
            <Typography.Title level={3} style={{ color: 'white', marginBottom: 0 }}>Dapp Boilerplate</Typography.Title> 
          {connected ?
            <Button type="primary" shape="circle" icon={<WalletOutlined />} onClick={() => setVisible(true)} />
            :
            <Button type="primary" onClick={connectWallet}>Connect Wallet</Button>
          }
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
                  <Button href="https://faucet-dapps.shardeum.org/" target="_blank">Claim Testnet SHM</Button>
              </Space>
          </Modal>
      </Header>
  );
}

export default WalletHeader;
