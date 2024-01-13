import React, { createContext, useState, useCallback } from "react";
import { ethers } from "ethers";
import { Modal, message } from "antd";

export const WalletContext = createContext();

const desiredNetwork = 8082;

export const WalletProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [connected, setConnected] = useState(false);
  const [visible, setVisible] = useState(false);
  const [signer, setSigner] = useState(null);

  const updateBalance = useCallback(async (account) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  }, []);

  const connectWallet = useCallback(async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const chainId = await provider
          .getNetwork()
          .then((network) => network.chainId);
        if (chainId !== desiredNetwork) {
          Modal.warning({
            title: "Wrong Network",
            content: "Please connect to the Shardeum Sphinx network.",
          });
          return;
        }

        // Set signer
        const signerInstance = provider.getSigner();
        setSigner(signerInstance);

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setSelectedAddress(accounts[0]);
        await updateBalance(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      Modal.error({
        title: "Metamask is not installed",
        content: "Please install it from https://metamask.io",
      });
    }
  }, [updateBalance]);

  const disconnectWallet = useCallback(() => {
    setSelectedAddress(null);
    setBalance(null);
    setConnected(false);
    setSigner(null);
    message.success("Wallet disconnected");
  }, []);

  return (
    <WalletContext.Provider
      value={{
        connected,
        selectedAddress,
        balance,
        visible,
        signer,
        setConnected,
        setVisible,
        connectWallet,
        disconnectWallet,
        setSelectedAddress,
        setBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
