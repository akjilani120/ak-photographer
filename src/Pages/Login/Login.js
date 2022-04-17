import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    const handleSignIn=() =>{
        navigate("/signin")
    }
    return (
        <div className='container sign-header '>
           <div className="form-header " style={{height:"420px"}}>
               <h1 className=''>Please Login</h1>
           <Form className=''>
               
                <Form.Group className="mb-4 text-start" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  required/>                   
                </Form.Group>

                <Form.Group className="mb-4 text-start" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
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