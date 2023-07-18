import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/carrusel.module.css'
import { useEffect } from 'react';


function Carrusel({imagenes}) {
  const [contador, setContador] = useState(0)
  

  useEffect(() => {
    if(contador >= 3) {
      setContador(0)
    } else {
      if(contador < 0) {
        setContador(2)
      }
    }
  }, [contador])
  return (
    <div className={styles.carrusel}>
        <div className={styles.carruselImage}>
          {imagenes.map( imagen => (
            <Image src={imagen.imageName} width={400} height={250} alt='Imagen' id={imagen.id} className={imagen.id === contador ? styles.active : 'carruselImage'} />
          ))
          }

          <div className={styles.btnCarrusel}>
            <button onClick={() => setContador(contador + 1)}>
              {'<'}
            </button>

            <button onClick={() => setContador(contador - 1)}>
              {'>'}
            </button>
          </div>
        </div>
    </div>
  )
}

export default Carrusel

