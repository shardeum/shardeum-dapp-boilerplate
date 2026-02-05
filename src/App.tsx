import { useWallet } from './context/WalletContext';
import { TokenInterface } from './components/TokenInterface';
import { SHARDEUM_TESTNET } from './config/networks';
import './App.css';

function App() {
  const { account, chainId, connectWallet, disconnectWallet, switchNetwork } = useWallet();

  const isCorrectNetwork = chainId === SHARDEUM_TESTNET.chainId;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shardeum dApp</h1>

        <div className="wallet-controls">
          {!account ? (
            <button onClick={connectWallet} className="connect-btn">
              Connect Wallet
            </button>
          ) : (
            <div className="wallet-info">
              <p>Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
              <button onClick={disconnectWallet} className="disconnect-btn">
                Disconnect
              </button>
            </div>
          )}
        </div>

        {account && !isCorrectNetwork && (
          <div className="network-warning">
            <p>⚠️ Wrong Network</p>
            <button onClick={switchNetwork}>Switch to Shardeum Testnet</button>
          </div>
        )}
      </header>

      <main>
        {account && isCorrectNetwork && <TokenInterface />}
      </main>
    </div>
  );
}

export default App;
