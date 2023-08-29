'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from '../styles/header.module.css'

import useLanguage from "@/hooks/useLanguage"
import HideNav from "./HideNav"
import Navegacion from "./Navegacion"

function Header() {
  const router = usePathname()
  const { ingles, handleChangeIngles } = useLanguage()
  return (
    <header className={styles.header}>
      <div className={styles.barraNav}>
        <div className={styles.navLogoButton}>
          <Link href={'/'}>
            <h2>Alex<span>Dev.</span></h2>
          </Link>

          <div>
            <HideNav />
          </div>
          
        </div>
        
        <Navegacion />
      </div>
        
    </header>
  )
}

export default Header
