import styles from '../styles/globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], })

export const metadata = {
  title: 'Inicio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}

        <Script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js" />
      </body>
    </html>
  )
}
