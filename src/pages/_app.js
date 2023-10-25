import '@/styles/globals.css';
import WalletHeader from '@/components/Header';

function App({ Component, pageProps }) {
  return (
    <div>
      <WalletHeader />
      <Component {...pageProps} />
      {/* Add other global components here if necessary, like a Footer */}
    </div>
  );
}

export default App;
