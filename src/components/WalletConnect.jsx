// web3modalConfig.js
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

const projectId = '51579e0bfc307e47bf2c53f47a6a394c';

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
};

const ropsten = {
  chainId: 3,
  name: 'Ropsten',
  currency: 'ETH',
  explorerUrl: 'https://ropsten.etherscan.io',
  rpcUrl: 'https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID',
};

const rinkeby = {
  chainId: 4,
  name: 'Rinkeby',
  currency: 'ETH',
  explorerUrl: 'https://rinkeby.etherscan.io',
  rpcUrl: 'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID',
};


const songbird =  {
    name: "Songbird",
    currency: "SGB",
    explorerUrl: "https://explorer-api.songbird.network",
    rpcUrl: "https://songbird-api.flare.network/ext/bc/C/rpc",
    chainId: 19
  };
// Add more chains as needed

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/'],
};

const web3Modal = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, ropsten, rinkeby, songbird],
  projectId,
  enableAnalytics: true,
  
});

export default web3Modal;
