import '@/styles/globals.css';
import WalletHeader from '@/components/Header';
import { WalletProvider } from '@/context/WalletContext';

function App({ Component, pageProps }) {
  return (
    <div>
      <WalletProvider>
      <WalletHeader />
      <Component {...pageProps} />
      </WalletProvider>
      {/* Add other global components here if necessary, like a Footer */}
    </div>
  );
}

export default App;
