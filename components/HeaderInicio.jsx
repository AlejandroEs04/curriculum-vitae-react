'use client'
import styles from '../styles/inicio.module.css'
import useLanguage from '@/hooks/useLanguage'
import TextoAnimado from './textoAnimado'

function HeaderInicio() {
    const {ingles} = useLanguage()
  return (
    <div>
        <div className={`contenedor ${styles.presentacion}`}>
            <p><span>{ingles === false ? 'Hola' : 'Hello'}!</span></p>
            <h1>{ingles === false ? 'Soy' : "I'm"}<span> Alejandro</span></h1>
            <TextoAnimado />
            <p className={styles.text}>{ingles === false ? 'Soy un Desarrollador Jr. con dos años de experiencia' : "I'm a Developer Jr. with 2 years of experience"}</p>
        </div>

        <div className={`contenedor ${styles.contenedorImagen}`}>
              
        </div>
    </div>
  )
}

export default HeaderInicio
