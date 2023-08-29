import styles from '../styles/aboutme.module.css'
import Image from 'next/image'
import fondoAboutMe from '../public/img/AboutMe.jpeg'
import { getDate } from '@/helpers/currentlyDate'

function EspanolAcercaMi() {
  const currently = getDate()
  return (
    <>
      <h2>Acerca de mi</h2>

      <div className='contenedor gray grid2'>
        <div className={styles.textContainerAboutMe}>
            <p className={styles.moreBig}>Hola!, Soy <span>Alejandro</span></p>
            <div>
                <p>Soy programador, con {currently} años de experiencia</p>
                <p>Tengo conocimientos de desarrollo Front End y Back End, con tecnologias y frameworks como: React, Java, JavaScript, PHP, Python, etc.</p>
                <p>Practico todos los dias mediante cursos, proyectos personales, he desarrollado diferentes proyectos como tiendas online o paginas web estaticas, tanto con React o Next, o PHP</p>
            </div>
        </div>
        
        <div className={styles.contenedorImagen}>
            <Image src={fondoAboutMe} alt='Imagen Fondo Acerca de Mi'/>
        </div>
      </div>
    </>
  )
}

export default EspanolAcercaMi
