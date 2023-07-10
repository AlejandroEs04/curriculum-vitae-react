'use client'
import styles from '../styles/inicio.module.css'
import Link from "next/link"
import Technologies from './components/technologies'
import AboutMe from './components/aboutMe'
import Typewriter from 'typewriter-effect';

export const metadata = {
  title: 'Inicio',
}

export default function Index() {

  return (
    <main>
      <div className={styles.paginaInicio}>
        <div className='grid2'>
          <div className={`contenedor ${styles.presentacion}`}>
            <p><span>Hello!</span></p>
            <h1>I'm <span>Alejandro</span></h1>
            <Typewriter 
              options={{
                strings: ['Developer Jr.', 'Backend Developer'],
                autoStart: true,
                loop: true,
              }}
            />
            <p className={styles.text}>I'm a Developer Jr. with 2 years of experience.</p>
          </div>

          <div className='contenedor'>
            
          </div>
        </div>

        <div className='flexRow center'>
          <Link href="/#aboutme" className={`btn ${styles.btnKnowMe}`}>
            Know more about me
          </Link>

          <button className='btn'>Download CV</button>
        </div>
        
      </div>

      <AboutMe 
      
      />
      

      <Technologies 
        
      />
        
    </main>

    
  )
}
