'use client'
import styles from '../styles/proyecto.module.css'
import Link from 'next/link'
import Slider from './Slider'
import useLanguage from '@/hooks/useLanguage'

function Proyect({proyecto}) {
  const {ingles} = useLanguage()
  return (
    <div className={styles.contenedorProyecto}>
        <div className={styles.textoProyecto}>
            <h3>{proyecto.name}</h3>
            <p>{ingles === false ? proyecto.descripcion : proyecto.description}</p>
            <div className={styles.linkContenedor}>
              <p>Link:</p>
              <Link href={proyecto.link}>Proyecto {proyecto.name}</Link>
            </div>
        </div>

        <Slider 
          key={proyecto.id}
          imagenes={proyecto.imagenes}
        />
    </div>
  )
}

export default Proyect
