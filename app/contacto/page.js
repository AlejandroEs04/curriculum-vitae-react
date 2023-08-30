'use client'
import styles from '../../styles/contacto.module.css'
import Image from "next/image"
import Link from "next/link"
import FormularioContacto from '@/components/FormularioContacto'
import whatsappIcon from '../../public/img/whatsapp.svg'
import guithubIcon from '../../public/img/github.svg'
import useLanguage from '@/hooks/useLanguage'

export const metadata = {
  title: 'AlexDev - Contactame',
  description: 'Seccion de contacto',
}

function Page() {
  const {ingles} = useLanguage()
  return (
    <main>
      <div className="paginaInicio">
        <h1>{ingles === false ? 'Contactame' : 'Contact me'}</h1>
      </div>

      <div className={`${styles.contactPage}`}>
        <div className={`contenedor ${styles.contenedor}`}>
          <div className={styles.contactText}>
            <div>
              <h2>{ingles === false ? 'Gracias por contactarme' : 'Thanks for contact me'}</h2>
              <p>{ingles === false ? 'Contestare lo mas pronto posible' : "I'll answer more posible quick"}</p>
            </div>
            

            <div className={styles.contactoformas}>
              <div>
                <p>{ingles === false ? 'Tambien puedes contactarme por:' : "Also, you can contact me for:"}</p>
                <Link href={'https://wa.me/8110367083'}>
                  <Image src={whatsappIcon} alt="Contacto por Whatsapp" />
                </Link>
                
              </div>

              <div>
                <p>{ingles === false ? 'Puedes ver mi portafolio en:' : "Also, you can see my portfolio in:"}</p>
                <Link href={'https://github.com/AlejandroEs04'}>
                  <Image src={guithubIcon} alt="Perfil en github" />
                </Link>
                
              </div>
            </div>
          </div>

          <FormularioContacto 
            ingles={ingles}
          />
        </div>
        
      </div>
    </main>
  )
}

export default Page
