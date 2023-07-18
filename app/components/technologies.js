import styles from '../../styles/technologies.module.css'
import Image from 'next/image'
import { tecnologias } from '../data/technologies'
import Technology from './technology'
import reactImage from '../../public/img/react.svg'
import javaImage from '../../public/img/java.png'
import phpImage from '../../public/img/php.png'
import cssImage from '../../public/img/css.png'
import pythonImage from '../../public/img/python.jpg'

function Technologies({ingles}) {
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
