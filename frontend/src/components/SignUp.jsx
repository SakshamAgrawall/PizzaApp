import React, { useState } from 'react';
import { Form,Button,Container } from 'react-bootstrap';
import {useDispatch,useSelector }  from 'react-redux';
import {signUpUser} from "../actions/userAction";
const SignUp = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')

const dispatch = useDispatch()

  const signUpHandler=()=>{
    if(password!==confirmPassword){
      alert("password not match")
    }
    else{
      const user = {name,email,password,confirmPassword};
      dispatch(signUpUser(user));
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      alert("signUp Success");

    }
  }
  return (
    <>
    <Container>
      <h1>SIGN UP NOW</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control  type="name" placeholder="Enter full name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password"  value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={signUpHandler}>
        Signup
      </Button>
      </div>
    </Form>
    </Container>
    </>
  )
}

export default SignUp;