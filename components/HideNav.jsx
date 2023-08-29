'use client'
import { useState } from 'react'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import { Button, Offcanvas } from 'react-bootstrap'
import useLanguage from "@/hooks/useLanguage"
import styles from '../styles/offcanva.module.css'
import gitHubText from '../public/img/GitHub_Logo.png'
import gitHubMark from '../public/img/github-mark.svg'
import barras from '../public/img/barra.svg'

function HideNav() {
    const [show, setShow] = useState(false)
    const router = usePathname()
    const expand = true

    const { ingles, handleChangeIngles } = useLanguage()

    const handleChangeShow = () => {
        setShow(!show)
    }

    return (
        <>
            <style type="text/css">
                {`
                    .canvaBg {
                        background: rgba(31, 29, 29, 0.616);
                        backdrop-filter: blur(20px);
                        color: white;
                    }
                `}
            </style>
            <Image src={barras} width={35} height={35} className={styles.barras} onClick={handleChangeShow} />
            <Offcanvas className='canvaBg' show={show} onHide={handleChangeShow}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <p>Navegacion</p>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                <div className={styles.navContainer}>
                    <nav className={styles.navegacion}>
                        <button className={styles.headerBtn} onClick={handleChangeIngles}>{ingles === false ? 'En' : 'Es'}</button>
                        <Link onClick={handleChangeShow} href={'/'} className={router === '/' ? styles.active : ''}>{ingles === false ? 'Inicio' : 'Main'}</Link>
                        <Link onClick={handleChangeShow} href={'/portafolio'} className={router === '/portafolio' ? styles.active : ''}>{ingles === false ? 'Portafolio' : 'Portfolio'}</Link>
                    </nav>
                    <div className={styles.contenedorRedes}>
                        <Link href='https://github.com/AlejandroEs04'>
                            <Image src={gitHubMark} width={100} height={85} alt="Logo de GuitHub" className={styles.markImage} />
                            <Image src={gitHubText} width={100} height={85} alt="Logo de GuitHub" />
                        </Link>

                        <Button variant="light" size='lg' className='btn' onClick={handleChangeShow}>
                            <Link href={'/contacto'} className={styles.btnLink} >{ingles === false ? 'Contacto' : 'Contact'}</Link>
                        </Button>
                    </div>
                </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default HideNav
