'use client'
import useLanguage from '@/hooks/useLanguage'
import styles from '../styles/technologies.module.css'
import Image from 'next/image'

function Technology({tecnologia}) {
    const { ingles } = useLanguage()
    return (
        <div className={`${styles.contenedorTech} white`}>
            <h3>{tecnologia.name}</h3>
            <div className={`white ${styles.flexTech}`}>
                <div className={styles.technology}>
                    <Image src={tecnologia.URL} width={250} height={250} alt='Imagen React Logo' className={tecnologia.animation}/>
                </div>

                <div className={styles.textoDesc}>
                    <p>{ingles ? tecnologia.description : tecnologia.descripcion}</p>
                </div> 
            </div>
        </div>
    )
}

export default Technology
