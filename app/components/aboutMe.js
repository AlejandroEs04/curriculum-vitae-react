import styles from '../../styles/aboutme.module.css'
import Image from 'next/image'
import fondoImagen from '../../public/img/fondoAboutMe.png'

function AboutMe() {
  return (
    <div className={`white ${styles.contenedor}`} id='aboutme'>
      <h2>About me</h2>

      <div className='contenedor gray grid2'>
        <div className='contenedor'>
            <p className={styles.moreBig}>Hello!, I'm <span>Alejandro</span></p>
            <p>I'm apassionate web developer with 4 years of experience</p>
            <p>Aliquam erat volutpat. Fusce dictum auctor augue, quis placerat turpis egestas quis. Pellentesque finibus, leo eu vestibulum bibendum, nibh sapien semper est, faucibus congue tortor libero nec ipsum</p>
        </div>
        
        <div className={styles.contenedorImagen}>
            <Image src={fondoImagen} alt='Imagen Fondo Acerca de Mi'/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
