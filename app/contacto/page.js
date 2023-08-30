import styles from '../../styles/contacto.module.css'
import FormularioContacto from '@/components/FormularioContacto'
import ContactText from '@/components/ContactText'
import Titulo from '@/components/Titulo'

export const metadata = {
  title: 'AlexDev - Contactame',
  description: 'Seccion de contacto',
}

function Page() {
  return (
    <main>
      <div className="paginaInicio">
        <Titulo 
          titulo='Contactame'
          title='Contact Me'
        />
      </div>

      <div className={`${styles.contactPage}`}>
        <div className={`contenedor ${styles.contenedor}`}>
          <ContactText />

          <FormularioContacto />
        </div>
        
      </div>
    </main>
  )
}

export default Page
