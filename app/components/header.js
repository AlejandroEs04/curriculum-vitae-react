'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import styles from '../../styles/header.module.css'

function Header() {

  const router = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles.barraNav}>
        <Link href={'/'}>
          <h2>Alex<span>Dev.</span></h2>
        </Link>
        
        <nav className={styles.navegacion}>
            <Link href={'/'} className={router === '/' ? styles.active : ''}>Inicio</Link>
            <Link href={'/portafolio'} className={router === '/portafolio' ? styles.active : ''}>Portafolio</Link>
            <Link href={'/contacto'} className={router === '/contacto' ? styles.active : ''}>Contacto</Link>
        </nav>
      </div>
        
    </header>
  )
}

export default Header
