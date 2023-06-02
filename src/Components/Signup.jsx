import React from 'react'
import { Button,Container,Row,Col,Form,Image } from 'react-bootstrap';
import signUpImg from '../images/signup.png'
const Signup = () => {
  return (
    <Container className='bg-white h-100 p-1'>
        <Row>
            <Col lg={6} style={{backgroundColor:"#F1F3F4"}}>
                <Image src={signUpImg} style={{maxWidth:"100%",MaxHeight:"100%"}} />
            </Col>
            <Col lg={6} className='d-flex justify-content-center align-items-center px-3 py-5' >
                <Form style={{width:"100%"}}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3"  controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button style={{width:"100%"}}>Sign up</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Signup
