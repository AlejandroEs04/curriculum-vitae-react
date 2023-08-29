'use client'
import styles from '../styles/inicio.module.css'
import useLanguage from '@/hooks/useLanguage'
import TextoAnimado from './textoAnimado'
import { getDate } from '@/helpers/currentlyDate'

function HeaderInicio() {
    const {ingles} = useLanguage()
    const currently = getDate()
  return (
    <div>
        <div className={`contenedor ${styles.presentacion}`}>
            <p><span>{ingles === false ? 'Hola' : 'Hello'}!</span></p>
            <h1>{ingles === false ? 'Soy' : "I'm"}<span> Alejandro</span></h1>
            <TextoAnimado 
              ingles={ingles}
            />
            <p className={styles.text}>{ingles === false ? `Soy un Desarrollador Jr. con ${currently} años de experiencia` : `I'm a Developer Jr. with ${currently} years of experience`}</p>
        </div>

        <div className={`contenedor ${styles.contenedorImagen}`}>
              
        </div>
    </div>
  )
}

export default HeaderInicio
