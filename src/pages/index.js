import { Inter } from 'next/font/google'
import WalletHeader from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <WalletHeader />
    </>
  )
}
