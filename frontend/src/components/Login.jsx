import React from 'react';
import {Form,Container,Button,Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
const Login = () => {
  return (
    <>
    <Container>
        <h1>LOGIN NOW </h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Login
      </Button>
      <Button variant="secondary" size="lg">
      <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
      </Button>
    </div>
    </Form>
    </Container>
    </>
  )
}

export default Login;