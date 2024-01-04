'use client'
import Image from 'next/image'
import styles from '../styles/inicio.module.css'
import useLanguage from '@/hooks/useLanguage'
import TextoAnimado from './textoAnimado'
import { getDate } from '@/helpers/currentlyDate'
import ImagenMia from '../public/img/yo2.jpg'
import dev from '../public/img/web-development.png'
import php from '../public/img/php.svg'
import python from '../public/img/python.svg'
import js from '../public/img/js.svg'

function HeaderInicio() {
    const {ingles} = useLanguage()
    const currently = getDate()
  return (
    <div className='grid2'>
        <div className={`contenedor ${styles.presentacion}`}>
            <p><span>{ingles === false ? 'Hola' : 'Hello'}!</span></p>
            <h1>{ingles === false ? 'Soy' : "I'm"}<span> Alejandro</span></h1>
            <TextoAnimado 
              ingles={ingles}
            />
            <p className={styles.text}>{ingles === false ? `Soy un Desarrollador Jr. con ${currently} años de experiencia` : `I'm a Developer Jr. with ${currently} years of experience`}</p>
        </div>

        <div className={`contenedor ${styles.contenedorImagen}`}>
          <div className={`${styles.contenedorImagenRelative}`} >
             <Image src={ImagenMia} width={500} height={900} alt='Imagen de mi' />

             <div className={`${styles.div3}`} >
              <Image src={dev} width={150} height={150} alt='Imagen Dev' />
             </div>
             <div className={`${styles.div4}`} >
              <Image src={php} width={150} height={150} alt='Imagen Dev' />
             </div>
             <div className={`${styles.div5}`} >
              <Image src={python} width={150} height={150} alt='Imagen Dev' />
             </div>
             <div className={`${styles.div6}`} >
              <Image src={js} width={150} height={150} alt='Imagen Dev' />
             </div>
          </div>
           
        </div>
    </div>
  )
}

export default HeaderInicio
