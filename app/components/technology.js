import styles from '../../styles/technologies.module.css'
import Image from 'next/image'

function Technology({tecnologia, ingles}) {
    return (
        <div className={`${styles.contenedorTech} white`}>
            <h3>{tecnologia.name}</h3>
            <div className={`white ${styles.flexTech}`}>
                <div className={styles.technology}>
                    <Image src={tecnologia.imagen} width={250} height={250} alt='Imagen React Logo' className={tecnologia.animation}/>
                </div>

                <div className={styles.textoDesc}>
                    {ingles === false ? tecnologia.descripcion : tecnologia.description}
                </div> 
            </div>
        </div>
    )
}

export default Technology
