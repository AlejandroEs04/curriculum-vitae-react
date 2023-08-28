import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button, Offcanvas } from "react-bootstrap"
import useLanguage from "@/hooks/useLanguage"
import styles from '../styles/header.module.css'
import gitHubText from '../public/img/GitHub_Logo.png'
import gitHubMark from '../public/img/github-mark.svg'

function Navegacion() {
    const router = usePathname()
    const { ingles, handleChangeIngles } = useLanguage()
    
    return (
        <div className={styles.navContainer}>
          <nav className={styles.navegacion}>
              <button className={styles.headerBtn} onClick={handleChangeIngles}>{ingles === false ? 'En' : 'Es'}</button>
              <Link href={'/'} className={router === '/' ? styles.active : ''}>{ingles === false ? 'Inicio' : 'Main'}</Link>
              <Link href={'/portafolio'} className={router === '/portafolio' ? styles.active : ''}>{ingles === false ? 'Portafolio' : 'Portfolio'}</Link>
          </nav>
          <div className={styles.contenedorRedes}>
            <Link href='https://github.com/AlejandroEs04'>
              <Image src={gitHubMark} width={60} height={25} alt="Logo de GuitHub" className={styles.markImage} />
              <Image src={gitHubText} width={60} height={25} alt="Logo de GuitHub" />
            </Link>

            <Button variant="light" size='lg' className='btn'>
              <Link href={'/contacto'} className={styles.btnLink} >{ingles === false ? 'Contacto' : 'Contact'}</Link>
            </Button>
          </div>
        </div>
    )
}

export default Navegacion
