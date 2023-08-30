import Titulo from '@/components/Titulo'
import styles from '../../styles/portafolio.module.css'
import Proyect from '@/components/Proyect'

const fetchProjects = () => {
  return fetch('https://noxxugmr.api.sanity.io/v2021-03-25/data/query/production?query=*[_type=="proyectos"]', { cache: 'no-cache' }).then(res => res.json())
}

export const metadata = {
  title: 'Portafolio',
  description: 'Seccion de los proyectos realizados y mi experiencia',
}

export default async function Page() {
  const ingles = true

  const {result: projects} = await fetchProjects()

  return (
    <main>
      <div className="paginaInicio">
        <Titulo 
          titulo='Portafolio'
          title='Portfolio'
        />
      </div>

      <div className="white">
        <div className={`${styles.contenedorPortafolio}`}>
          <h2>{ingles === false ? 'Mis proyectos' : 'My projects'}</h2>

          <div className={styles.proyectosContenedor}>
          {projects.map( proyecto => (
            <Proyect 
              key={proyecto.id}
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

//
