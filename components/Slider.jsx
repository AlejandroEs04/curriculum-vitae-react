'use client'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap'
import styles from '../styles/proyecto.module.css'

const Slider = ({imagenes}) => {
  
  return (
    <Carousel className={styles.slider}>
        <Carousel.Item>
          <Image className={styles.imagenSlider} src={imagenes.imagen1.URL} width={500} height={200} />
        </Carousel.Item>

        <Carousel.Item>
          <Image className={styles.imagenSlider} src={imagenes.imagen2.URL} width={500} height={200} />
        </Carousel.Item>

        <Carousel.Item>
          <Image className={styles.imagenSlider} src={imagenes.imagen3.URL} width={500} height={200} />
        </Carousel.Item>
    </Carousel>
  )
}

export default Slider

