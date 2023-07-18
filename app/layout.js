'use client'
import styles from '../styles/globals.css'
import { Inter } from 'next/font/google'
import { createContext, useState } from 'react'
import Script from 'next/script'
import Header from './components/header'
import LanguageProvider from './idioma-provider'

const inter = Inter({ subsets: ['latin'], })

export const metadata = {
  title: 'Inicio',
}

export default function RootLayout({ children }) {
  const [ingles, setIngles] = useState(true);
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Header 
          setIngles={setIngles}
          ingles={ingles}
        />
        <LanguageProvider
          ingles={ingles}
        >
          {children}
        </LanguageProvider>
        <Script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js" />
      </body>
    </html>
  )
}
