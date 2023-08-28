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
                        <FloatingLabel
                            label="Nombre"
                            className="mb-3"
                        >
                            <Form.Control size='lg' placeholder="Name" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            label="Last Name"
                            className="mb-3"
                        >
                            <Form.Control placeholder="Last Name" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <FloatingLabel
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control size='lg' placeholder="Email" />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Comments">
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                
            </Form>
        </div>
    )
}

export default FormularioContacto
