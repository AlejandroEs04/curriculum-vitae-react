import useLanguage from '@/hooks/useLanguage';
import Typewriter from 'typewriter-effect';

const arrayText = [
  'Developer Jr.', 
  'Backend Developer',
  'Web Developer',
  'Mobile Developer'
]

const arregloTexto = [
  'Desarrollador Jr.',
  'Desarrollador Backend',
  'Desarrollador Web',
  'Desarrollador Movil'
]

function TextoAnimado({ingles}) {

  return (
    <>
      {ingles ? 
        <Typewriter 
            options={{
                strings: arrayText,
                autoStart: true,
                loop: true,
            }}
        /> 
      : 
        <Typewriter 
            options={{
              strings: arregloTexto,
              autoStart: true,
              loop: true,
            }}
        /> 
      }   
    </>
  )
}

export default TextoAnimado
