'use client'
import styles from '../styles/formulario.module.css'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import useLanguage from '@/hooks/useLanguage'

function FormularioContacto() {
    const {ingles} = useLanguage()
    const [state, handleSubmit] = useForm("mdorgqbw");
    
    return (
        <div className={`${styles.contenedorFormulario}`}>
            {state.succeeded && <Alert className={styles.alert} variant='success'>{ingles ? 'Mail sent successfully' : 'Correo Enviado Correctamente'}</Alert>}
            {state.errors && <Alert className={styles.alert} variant='danger'>{ingles ? 'All fields are required' : 'Todos los campos son obligatorios'}</Alert>}
            <Form
                onSubmit={handleSubmit}
            >
                <Row>
                    <Col>
                        <Form.Label htmlFor="name">{ingles ? 'Name' : 'Nombre'}</Form.Label>
                        <Form.Control id='name' size='lg' placeholder="Name" name='name' />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="lastName">{ingles ? 'Last Name' : 'Apellido(s)'}</Form.Label>
                        <Form.Control id='lastName' size='lg' placeholder="Last Name" name='lastName'  />
                        <ValidationError 
                            prefix="Last Name" 
                            field="lastName"
                            errors={state.errors}
                        />
                    </Col>
                </Row>
                    <div>
                        <Form.Label htmlFor="email">{ingles ? 'Email' : 'Correo'}</Form.Label>
                        <Form.Control id='email' size='lg' placeholder="Email" name='email' />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    
                    <div>
                        <Form.Label htmlFor="comments">{ingles ? 'Message' : 'Mensaje'}</Form.Label>
                        <Form.Control
                            id='comments'
                            as="textarea"
                            style={{ height: '100px' }}
                            name='message'
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    
                    <Button size='lg' type='submit' disabled={state.submitting}>
                        {ingles ? 'Send' : 'Enviar'}
                    </Button>
            </Form>
        </div>
    )
}

export default FormularioContacto
