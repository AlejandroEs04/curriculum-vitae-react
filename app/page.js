import styles from '../styles/inicio.module.css'
import Technologies from '@/components/Technologies'
import AboutMe from '@/components/aboutMe'
import HeaderInicio from '@/components/HeaderInicio'
import Boton from '@/components/Boton'

export default function Index() {
  
  return (
    <>
      <main>
        <div className={styles.headerInicioContainer}>
          <div className='grid2'>
            <HeaderInicio />
          </div>

          <div className='flexRow center'>
            <Boton />
          </div>
        </div>

        <AboutMe />
        
        <Technologies />
          
      </main>
    </>
    
  )
}