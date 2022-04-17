import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'
const SignIn = () => {
    const navigate=useNavigate()
    const handleLogin=() =>{
        navigate("/login")
    }
    return (
        <div className='container sign-header '>
           <div className="form-header ">
               <h1 className=''>Please Sign In</h1>
           <Form className=''>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label className=''>Name</Form.Label>
                    <Form.Control type="Name" placeholder="Enter Name" required/>                   
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  required/>                   
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                 <p className='have-account'>If have already account ? <span className='text-primary login-page' onClick={handleLogin}>Login</span> </p>
                <Button className='px-5 sign-btn' variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
           </div>
        </div>
    );
};

export default SignIn;