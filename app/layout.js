import styles from '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { LanguageProvider } from '@/context/IdiomaProvider'
import { EmailProvider } from '@/context/EmailProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <EmailProvider>
            <Header />
            {children}
          </EmailProvider>
        </LanguageProvider>
        
      </body>
    </html>
  )
}
