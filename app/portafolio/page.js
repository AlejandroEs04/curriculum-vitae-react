'use client'
import { useContext } from "react";
import { LanguageContext } from "../idioma-provider"
import styles from '../../styles/portafolio.module.css'
import Proyect from "../components/proyect";
import { proyectos } from '../data/technologies'

export const metadata = {
    title: 'Portafolio'
}

function Page() {
  const ingles = useContext(LanguageContext);
  return (
    <main>
      <div className="paginaInicio">
        <h1>{ingles === false ? 'Portafolio' : 'Portfolio'}</h1>
      </div>

      <div className="white">
        <div className={`${styles.contenedorPortafolio}`}>
          <h2>{ingles === false ? 'Mis proyectos' : 'My projects'}</h2>

          <div className={styles.proyectosContenedor}>
            {proyectos.map( proyecto => (
              <Proyect 
                key={proyecto.name}
                proyecto={proyecto}
                ingles={ingles}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
