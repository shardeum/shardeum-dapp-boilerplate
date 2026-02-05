# Shardeum dApp Boilerplate

A complete, production-ready boilerplate for building decentralized applications (dApps) on **Shardeum EVM Testnet**. This project includes a simple ERC20 token contract and a React frontend with wallet integration.

![Shardeum dApp](https://shardeum.org/Shardeum.png)

## ✨ Features

- ✅ **Smart Contract**: ERC20 token (MyToken) with 1M fixed supply
- ✅ **React + TypeScript**: Modern frontend with Vite
- ✅ **Wallet Integration**: MetaMask connection with network switching
- ✅ **Token Interface**: View balances and transfer tokens
- ✅ **Transaction Explorer**: Direct links to Shardeum explorer
- ✅ **Pre-configured**: Ready for Shardeum EVM Testnet (Chain ID: 8119)

## 🚀 Quick Start

### Option 1: Clone and Run

```bash
git clone https://github.com/shardeum/shardeum-dapp-boilerplate.git
cd shardeum-dapp-boilerplate
npm install
```

### Option 2: Start from Scratch

Follow the complete tutorial in our [documentation](/docs/developer/tutorial).

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **MetaMask** wallet extension - [Install](https://metamask.io/)
- **Test SHM** tokens - [Get from faucet](https://docs.shardeum.org/docs/developer/faucet)
- **Code Editor** - VS Code recommended

## ⚙️ Configuration

### 1. Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your wallet's private key to `.env`:

```
PRIVATE_KEY=your_private_key_here
```

⚠️ **Important**: Never commit your `.env` file to version control!

### 2. Network Configuration

The project is pre-configured for **Shardeum EVM Testnet**:

- **Chain ID**: 8119 (0x1fb7)
- **RPC URL**: https://api-mezame.shardeum.org
- **Explorer**: https://explorer-mezame.shardeum.org
- **Network Name**: Shardeum EVM Testnet

Configuration is in `src/config/networks.ts`.

## 🛠️ Project Structure

```
shardeum-dapp-boilerplate/
├── contracts/              # Smart contracts
│   └── MyToken.sol        # ERC20 token contract
├── scripts/               # Deployment scripts
│   └── deploy.ts          # Deploy MyToken
├── src/                   # Frontend source
│   ├── components/        # React components
│   │   └── TokenInterface.tsx
│   ├── context/          # React context
│   │   └── WalletContext.tsx
│   ├── config/           # Configuration
│   │   ├── networks.ts
│   │   └── erc20Abi.ts
│   ├── App.tsx           # Main app component
│   ├── App.css           # Styles
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── hardhat.config.ts     # Hardhat configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies

```

## 📝 Smart Contract

### MyToken.sol

A simple ERC20 token implementation:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("My Token", "MTK") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }
}
```

**Features**:
- Fixed supply of 1,000,000 tokens
- Mints all tokens to deployer on deployment
- Standard ERC20 functions (transfer, approve, etc.)

## 🚢 Deployment

### 1. Deploy Smart Contract

```bash
npx hardhat run scripts/deploy.ts --network shardeumTestnet
```

**Save the deployed contract address!** You'll need it in step 2.

### 2. Update Frontend Configuration

Edit `src/config/networks.ts` and replace the contract address:

```typescript
export const TOKEN_ADDRESS = "0xYOUR_DEPLOYED_CONTRACT_ADDRESS";
```

### 3. Run the Frontend

```bash
npm run dev
```

Open `http://localhost:5173` in your browser!

## 🎯 How to Use

### 1. Connect Wallet

- Click "Connect Wallet" button
- Approve the connection in MetaMask

### 2. Switch to Shardeum Testnet

- If prompted, approve adding and switching to Shardeum Testnet
- Network will be added automatically

### 3. Get Test Tokens

Visit the [Shardeum Faucet](https://docs.shardeum.org/docs/developer/faucet) to get test SHM tokens.

### 4. Transfer Tokens

- View your token balance
- Enter recipient address and amount
- Click "Transfer" and confirm in MetaMask
- View transaction on explorer

## 🏗️ Building for Production

### Build the Frontend

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Deploy to Hosting

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**IPFS** (Decentralized):
```bash
npm install -g ipfs-deploy
ipfs-deploy dist
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run dev server (frontend)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy smart contract
npx hardhat run scripts/deploy.ts --network shardeumTestnet

# Compile contracts
npx hardhat compile

# Run Hardhat console
npx hardhat console --network shardeumTestnet
```

## 📚 What You'll Learn

This boilerplate teaches you:

- ✅ Smart contract deployment with Hardhat
- ✅ ERC20 token implementation
- ✅ React with TypeScript
- ✅ MetaMask wallet integration
- ✅ Reading blockchain data with ethers.js
- ✅ Sending transactions
- ✅ Network switching
- ✅ Error handling
- ✅ Transaction tracking

## 🛡️ Best Practices

### Security

1. **Never expose private keys** - Use environment variables
2. **Validate user input** - Check addresses and amounts before sending
3. **Handle errors gracefully** - Display user-friendly error messages
4. **Test thoroughly** - Always test on testnet before mainnet

### Performance

1. **Cache contract instances** - Don't recreate on every render
2. **Debounce user input** - For real-time updates
3. **Use event listeners** - Instead of polling
4. **Optimize bundle size** - Use code splitting

### User Experience

1. **Show loading states** - Let users know transactions are processing
2. **Display transaction links** - Link to block explorer
3. **Handle disconnection** - Gracefully handle wallet disconnecting
4. **Mobile responsive** - Test on mobile devices

## 🐛 Troubleshooting

### MetaMask Not Detected

```typescript
if (!window.ethereum) {
  alert('Please install MetaMask!');
}
```

### Wrong Network

The app automatically prompts users to switch to Shardeum Testnet.

### Transaction Failing

- Check you have enough SHM for gas
- Verify recipient address is valid
- Ensure you have enough token balance

### Contract Not Deployed

Make sure you've deployed the contract and updated `TOKEN_ADDRESS` in `src/config/networks.ts`.

## 📖 Additional Resources

- [Full Tutorial](/docs/developer/tutorial) - Step-by-step guide
- [Shardeum Documentation](https://docs.shardeum.org)
- [Shardeum Discord](https://discord.com/invite/shardeum)
- [Hardhat Documentation](https://hardhat.org/docs)
- [ethers.js Documentation](https://docs.ethers.org/)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation, your help makes a difference.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Hardhat](https://hardhat.org/)
- Powered by [OpenZeppelin](https://www.openzeppelin.com/)
- Frontend with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Network interactions via [ethers.js](https://docs.ethers.org/)

## 💬 Need Help?

- [Shardeum Discord](https://discord.com/invite/shardeum) - Community support
- [GitHub Issues](https://github.com/shardeum/shardeum-dapp-boilerplate/issues) - Report bugs
- [Documentation](https://docs.shardeum.org) - Complete guides

---

**Happy Building on Shardeum! 🚀**
