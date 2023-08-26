import styles from '../styles/technologies.module.css'
import Technology from './Technology'

const fetchTecnologias = () => {
  return fetch('https://noxxugmr.apicdn.sanity.io/v2021-03-25/data/query/production?query=*[_type+%3D%3D+%22tecnologias%22]', { cache: 'no-cache' }).then(res => res.json())
}

async function Technologies() {
  const {result: tecnologias} = await fetchTecnologias()
  const ingles = true

  return (
    <div className={styles.technologies} id='tegnologies'>
      <h2>{ingles === false ? 'Mis Tecnologias' : 'My Technologies'}</h2>
      <div className={styles.technologiesGrid}>

        {tecnologias.map( tecnologia => (
            <Technology 
                key={tecnologia.name}
                ingles={ingles}
                tecnologia={tecnologia}
            />
        ))}
        
      </div>
    </div>
  )
}

export default Technologies
