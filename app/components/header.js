'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import styles from '../../styles/header.module.css'
import gitHubText from '../../public/img/GitHub_Logo.png'
import gitHubMark from '../../public/img/github-mark.svg'

function Header({setIngles, ingles}) {
  const router = usePathname()

  const handleIngles = (e) => {
    if(ingles === false) {
      setIngles(true)
    } else {
      setIngles(false)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.barraNav}>
        <Link href={'/'}>
          <h2>Alex<span>Dev.</span></h2>
        </Link>
        
        <nav className={styles.navegacion}>
            <button className={styles.headerBtn} onClick={handleIngles}>{ingles === false ? 'En' : 'Es'}</button>
            <Link href={'/'} className={router === '/' ? styles.active : ''}>{ingles === false ? 'Inicio' : 'Main'}</Link>
            <Link href={'/portafolio'} className={router === '/portafolio' ? styles.active : ''}>{ingles === false ? 'Portafolio' : 'Portfolio'}</Link>
        </nav>

        <div className={styles.contenedorRedes}>
          <Link href='https://github.com/AlejandroEs04'>
            <Image src={gitHubMark} width={60} height={25} alt="Logo de GuitHub" className={styles.markImage} />
            <Image src={gitHubText} width={60} height={25} alt="Logo de GuitHub" />
          </Link>

          <Link href={'/contacto'} className={styles.contactBtn}>{ingles === false ? 'Contacto' : 'Contact'}</Link>
        </div>
      </div>
        
    </header>
  )
}

export default Header
