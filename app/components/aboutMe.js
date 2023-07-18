import styles from '../../styles/aboutme.module.css'
import Image from 'next/image'
import fondoAboutMe from '../../public/img/AboutMe.jpeg'

function AboutMe() {
  return (
    <div className={`white ${styles.contenedor}`} id='aboutme'>
      <h2>About me</h2>

      <div className='contenedor gray grid2'>
        <div className='contenedor'>
            <p className={styles.moreBig}>Hello!, I'm <span>Alejandro</span></p>
            <div className='gap2'>
              <p>I'm web developer with 4 years of experience</p>
              <p>I Know how to use different technologies in Front End and Back End, like: React, Java, JavaScript, PHP, Python, and more.</p>
            </div>
            
        </div>
        
        <div className={styles.contenedorImagen}>
            <Image src={fondoAboutMe} alt='Imagen Fondo Acerca de Mi'/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
