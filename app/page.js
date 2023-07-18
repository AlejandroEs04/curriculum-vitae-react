'use client'
import styles from '../styles/inicio.module.css'
import Link from "next/link"
import { useContext } from 'react'
import Technologies from './components/technologies'
import AboutMe from './components/aboutMe'
import AcercaMi from './components/acercaMi'
import { LanguageContext } from './idioma-provider'
import Typewriter from 'typewriter-effect';

export const metadata = {
  title: 'Inicio',
}

export default function Index() {
  const ingles = useContext(LanguageContext)

  return (
    <>
      <main>
        <div className={styles.paginaInicio}>
          <div className='grid2'>
            <div className={`contenedor ${styles.presentacion}`}>
              <p><span>{ingles === false ? 'Hola' : 'Hello'}!</span></p>
              <h1>{ingles === false ? 'Soy' : "I'm"}<span> Alejandro</span></h1>
              <Typewriter 
                options={{
                  strings: ['Developer Jr.', 'Backend Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className={styles.text}>{ingles === false ? 'Soy un Desarrollador Jr. con dos años de experiencia' : "I'm a Developer Jr. with 2 years of experience"}</p>
            </div>

            <div className={`contenedor ${styles.contenedorImagen}`}>
              
            </div>
          </div>

          <div className='flexRow center'>
            <Link href="/#aboutme" className={`btn ${styles.btnKnowMe}`}>
              Know more about me
            </Link>

            <button className='btn'>Download CV</button>
          </div>
          
        </div>

        {ingles === false ? <AcercaMi /> : <AboutMe /> }
        
        <Technologies 
          ingles={ingles}
        />
          
      </main>
    </>
    
  )
}