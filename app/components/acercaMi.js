import styles from '../../styles/aboutme.module.css'
import Image from 'next/image'
import fondoImagen from '../../public/img/fondoAboutMe.png'

function AcercaMi() {
  return (
    <div className={`white ${styles.contenedor}`} id='aboutme'>
      <h2>Acerca de mi</h2>

      <div className='contenedor gray grid2'>
        <div className='contenedor'>
            <p className={styles.moreBig}>Hola!, Soy <span>Alejandro</span></p>
            <div className='gap2'>
                <p>Soy programador, con 4 años de experiencia</p>
                <p>Tengo conocimientos de desarrollo Front End y Back End, con tecnologias y frameworks como: React, Java, JavaScript, PHP, Python, etc.</p>
            </div>
            
        </div>
        
        <div className={styles.contenedorImagen}>
            <Image src={fondoImagen} alt='Imagen Fondo Acerca de Mi'/>
        </div>
      </div>
    </div>
  )
}

export default AcercaMi
