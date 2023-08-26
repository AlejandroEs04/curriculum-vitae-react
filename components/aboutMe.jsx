'use client'
import useLanguage from '@/hooks/useLanguage'
import styles from '../styles/aboutme.module.css'
import EnglishAboutMe from './EnglishAboutMe'
import EspanolAcercaMi from './EspanolAcercaMi'

function AboutMe() {
  const { ingles } = useLanguage()
  return (
    <div className={`white ${styles.contenedor}`} id='aboutme'>
      {ingles ? <EnglishAboutMe /> : <EspanolAcercaMi />}
    </div>
  )
}

export default AboutMe
