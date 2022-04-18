import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SignIn.css'
import auth from '../../../firebase.init';
import img from '../../img/google.png'
const SignIn = () => {
    const navigate=useNavigate()
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState('')
    const [name, setName]= useState('')
    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      let erroShow;
      if(user){
        navigate("/login")
      }
      if(googleUser){
        navigate("/home")
      }
      if(error || googleError ){
        erroShow= <p>Error : {error?.message}</p>
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
    const handlerGoogle =() =>{
        signInWithGoogle()
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()   
        createUserWithEmailAndPassword(email, password)           
    }
    
    return (
        <div className='container sign-header '>
           <div className="form-header ">
               <h1 className=''>Please Registation Now</h1>
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
                 <h5 className='text-danger'>{erroShow }</h5>
                <Button className='px-5 sign-btn' variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
             <div className='d-flex  align-items-center my-2'>
                 <div className='bg-white w-50' style={{height:"2px"}}></div>
                 <div className='px-2' style={{fontSize:"22px"}}> Or</div>
                 <div className='bg-white w-50' style={{height:"2px"}}></div>
             </div>
             <div className='google mx-auto' onClick={handlerGoogle} >
                 <img src={img} alt="" /> <span> Google Sign In</span>
             </div>
           </div>
        </div>
    );
};

export default SignIn;