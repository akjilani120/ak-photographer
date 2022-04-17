import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignIn.css'
import auth from '../../../firebase.init';
const SignIn = () => {
    const navigate=useNavigate()
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState('')
    const [name, setName]= useState('')
    const [errorShow, setErrorShow]= useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      if(error){
          setErrorShow(error.message)
      }
      if(user){
        navigate("/login")
      }
    const handleEmail = event =>{
        setEmail(event.target.value)
    }
    const handleName = event =>{
        setName(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    
    const handleLogin=() =>{
        navigate("/login")
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault()   
        createUserWithEmailAndPassword(email, password)           
    }
    
    return (
        <div className='container sign-header '>
           <div className="form-header ">
               <h1 className=''>Please Sign In</h1>
           <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 text-start" controlId="formBasicText">
                    <Form.Label className=''>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" required/>                   
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email"  required/>                   
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                 <p className='have-account'>If have already account ? <span className='text-primary login-page' onClick={handleLogin}>Login</span> </p>
                 <h5 className='text-danger'>{errorShow}</h5>
                <Button className='px-5 sign-btn' variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
           </div>
        </div>
    );
};

export default SignIn;