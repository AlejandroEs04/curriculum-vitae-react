import styles from '../../styles/proyecto.module.css'
import Image from 'next/image'
import Carrusel from './carrusel'
import Link from 'next/link'

function Proyect({proyecto, ingles}) {
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

        <div className={styles.carruselContenedor}>
            <Carrusel 
              key={proyecto.id}
              imagenes={proyecto.imagenes}
            />
        </div>
    </div>
  )
}

export default Proyect
