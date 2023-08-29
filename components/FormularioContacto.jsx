'use client'
import styles from '../styles/formulario.module.css'
import { Form, FloatingLabel, Row, Col } from 'react-bootstrap'
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
            <Form>
                <Row>
                    <Col>
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control id='name' size='lg' placeholder="Name" />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="lastName">Last Name</Form.Label>
                        <Form.Control id='lastName' size='lg' placeholder="Last Name" />
                    </Col>
                </Row>
                    <div>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id='email' size='lg' placeholder="Email" />
                    </div>
                    
                    <div>
                        <Form.Label htmlFor="comments">Comments</Form.Label>
                        <Form.Control
                            id='comments'
                            as="textarea"
                            style={{ height: '100px' }}
                        />
                    </div>
                    
            </Form>
        </div>
    )
}

export default FormularioContacto
