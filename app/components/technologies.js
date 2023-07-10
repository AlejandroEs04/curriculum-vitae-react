import styles from '../../styles/technologies.module.css'
import Image from 'next/image'
import reactImage from '../../public/img/react.svg'
import javaImage from '../../public/img/java.png'
import phpImage from '../../public/img/php.png'
import cssImage from '../../public/img/css.png'
import pythonImage from '../../public/img/python.jpg'

function Technologies() {
  return (
    <div className={styles.technologies} id='tegnologies'>
      <h2>My Technologies</h2>
      <div className={styles.technologiesGrid}>
        <div className={`${styles.contenedorTech} white`}>
            <h3>React</h3>
            <div className={`white ${styles.flexTech}`}>
                <div className={styles.technology}>
                    <Image src={reactImage} width={250} height={250} alt='Imagen React Logo' className='imagenGirar'/>
                </div>

                <div className={styles.textoDesc}>
                    Conocimientos en construccion de paginas web, con react, usando tegnologias como: <span>Next.JS y Remix</span>
                </div> 
            </div>
        </div>

        <div className={`white ${styles.contenedorTech}`}>
            <h3>JavaScript</h3>
            <div className={`white ${styles.flexTech}`}>
                <div className={styles.technology}>
                    <Image src={javaImage} width={250} height={250} alt='Imagen JavaScript Logo' className={styles.imagenEscala}/>
                </div>

                <div className={styles.textoDesc}>
                    Uso de JavaScript para crear paginas web dinamicas
                </div> 
            </div>
        </div>

        <div className={`white ${styles.contenedorTech}`}>
            <h3>PHP</h3>

            <div className={`white ${styles.flexTech}`}>
                <div className={styles.technology}>
                    <Image src={phpImage} width={250} height={250} alt='Imagen PHP Logo' className={styles.imagenEscala}/>
                </div>

                <div className={styles.textoDesc}>
                    Conocimientos en php con Programacion Orientada a Objetos, conexion y uso a base de datos
                </div> 
            </div>
        </div>

        <div className={`white ${styles.contenedorTech}`}>
            <h3>Python</h3>

            <div className={`white ${styles.flexTech}`}>
                <div className={styles.technology}>
                    <Image src={pythonImage} width={250} height={250} alt='Imagen Python Logo' className='imagenGirar'/>
                </div>

                <div className={styles.textoDesc}>
                    Python para el manejo eficiente de datos
                </div> 
            </div>
        </div>

        <div className={`white ${styles.contenedorTech}`}>
            <h3>CSS</h3>

            <div className={`white ${styles.flexTech}`}>
                <div className={styles.technology}>
                    <Image src={cssImage} width={250} height={250} alt='Imagen CSS Logo' className={styles.imagenEscala}/>
                </div>

                <div className={styles.textoDesc}>
                    CSS para darle estilo, y un buen formato a cualquier pagina web
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
