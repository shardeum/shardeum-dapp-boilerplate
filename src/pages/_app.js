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
    </div>
  );
}

export default App;
