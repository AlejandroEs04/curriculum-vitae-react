'use client'
import styles from '../../styles/formulario.module.css'
import { useState } from 'react'

function FormularioContacto({ingles}) {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = e => {
        console.log('hola desde submit')
    }
    return (
        <div className={`${styles.contenedorFormulario}`}>
        <form
            onSubmit={handleSubmit}
            className={styles.formulario}
        >
            <div className={styles.inputsFormulario}>
                <div className={styles.inputsFormulario2}>
                    <div className={styles.inputFormulario}>
                        <label htmlFor="nombre">{ingles === false ? 'Nombre' : 'Name'}</label>
                        <input 
                            type='text' 
                            id='nombre' 
                            placeholder={ingles === false ? 'Nombre' : 'Name'}
                            value={nombre} 
                            onChange={ (e) => setNombre(e.target.value) }
                        />
                    </div>

                    <div className={styles.inputFormulario}>
                        <label htmlFor='correo'>{ingles === false ? 'Correo' : 'Email'}</label>
                        <input 
                            type='email' 
                            id='correo' 
                            placeholder={ingles === false ? 'Correo' : 'Email'}
                            value={email} 
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                    </div>                    
                </div>

                
                <div className={`${styles.inputFormulario} ${styles.textareaFormulario}`}>
                  <label htmlFor='mensaje'>{ingles === false ? 'Mensaje' : 'Message'}</label>
                    <textarea 
                        id='mensaje' 
                        value={mensaje}
                        onChange={ (e) => setMensaje(e.target.value) }
                    />  
                </div>
                
            </div>

            <input type='submit' value={ingles === false ? 'Enviar' : 'Submit'} className={`btn ${styles.btnEnviar}`} />
        </form>
        </div>
    )
}

export default FormularioContacto
