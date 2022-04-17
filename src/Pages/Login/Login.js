import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if(user){
        navigate(from, { replace: true });
      }
   
    const handleSignIn=() =>{
        navigate("/signin")
    }
    const emailRef=useRef("")
    const passwordRef=useRef("")
    const handleSubmit= (event)=>{
        event.preventDefault()
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='container sign-header '>
           <div className="form-header " style={{height:"420px"}}>
               <h1 className=''>Please Login</h1>
           <Form onSubmit={handleSubmit}>
               
                <Form.Group className="mb-4 text-start" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>                   
                </Form.Group>

                <Form.Group className="mb-4 text-start" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                 <p className='have-account'>If have already account ? <span className='text-primary login-page' onClick={handleSignIn}>Sign In</span> </p>
                <Button className='px-5 sign-btn' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
           </div>
        </div>
    );
};

export default Login;