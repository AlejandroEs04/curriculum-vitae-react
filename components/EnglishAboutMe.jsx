import styles from '../styles/aboutme.module.css'
import Image from 'next/image'
import fondoAboutMe from '../public/img/AboutMe.jpeg'

function EnglishAboutMe() {
    return (
        <>
            <h2>About me</h2>

            <div className='contenedor gray grid2'>
                <div className={styles.textContainerAboutMe}>
                    <p className={styles.moreBig}>Hello!, I am <span>Alejandro</span></p>
                    <div>
                        <p>I am web developer with 4 years of experience</p>
                        <p>I Know how to use different technologies in Front End and Back End, like: React, Java, JavaScript, PHP, Python, and more.</p>
                        <p>I practice every day with courses, personal projects, I developed diferents projects like online shop, static web sites, with React or NextJS or PHP</p>
                    </div>
                    
                </div>

                <div className={styles.contenedorImagen}>
                    <Image src={fondoAboutMe} alt='Imagen Fondo Acerca de Mi'/>
                </div>
            </div>
        </>
    )
}

export default EnglishAboutMe
