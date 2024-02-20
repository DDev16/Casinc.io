// ConnectButton.js
import React from 'react';
import web3Modal from '../components/WalletConnect.jsx';

const ConnectButton = () => {
  const handleConnect = async () => {
    try {
      const provider = await web3Modal.connect();
      console.log('Connected to:', provider);
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return <w3m-button onClick={handleConnect}>Connect Wallet</w3m-button>;
};

export default ConnectButton;
