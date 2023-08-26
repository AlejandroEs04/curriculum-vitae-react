import useLanguage from '@/hooks/useLanguage';
import Typewriter from 'typewriter-effect';

function TextoAnimado() {
  return (
    <>
        <Typewriter 
            options={{
                strings: ['Developer Jr.', 'Backend Developer'],
                autoStart: true,
                loop: true,
            }}
        />    
    </>
  )
}

export default TextoAnimado
