import React,{useState,useEffect} from 'react';
import {Form,Container,Button,Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {useDispatch,useSelector} from "react-redux";
import {loginUser} from "../actions/userAction";

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch = useDispatch();

  const loginHandler=() =>{
    const user = {email,password}
    dispatch(loginUser(user))
  }

  useEffect(()=>{
if(localStorage.getItem("currentUser")){
  window.location.href = "/"
}
  },[])

  return (
    <>
    <Container>
        <h1>LOGIN NOW </h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={loginHandler}>
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