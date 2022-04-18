import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img from '../img/google.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    let erroShow;
    if (error) {
        erroShow = <p>Error : {error?.message}</p>
    }
    const handleSignIn = () => {
        navigate("/signin")
    }

    const emailRef = useRef("")
    const passwordRef = useRef("")
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        } else {
            toast("Set your email")
        }

    }
    const handlerGoogle = () => {
        signInWithGoogle()
    }
    if (googleUser) {
        navigate("/home")
    }
    return (
        <div className='container sign-header '>
            <div className="form-header " style={{ height: "550px" }}>
                <h1 className=''>Please Login</h1>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-4 text-start" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        <h5 className='text-danger'>{erroShow}</h5>
                    </Form.Group>
                    <p className='have-account text-start'>If have already account ? <span className='text-primary login-page' onClick={handleSignIn}>Sign In</span> </p>
                    <p className='have-account text-start'>Forget Password ? <span className='text-primary login-page' onClick={handleResetPassword}>Reset now</span> </p>
                    <Button className='px-5 sign-btn' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className='d-flex  align-items-center my-2'>
                    <div className='bg-white w-50' style={{ height: "2px" }}></div>
                    <div className='px-2' style={{ fontSize: "22px" }}> Or</div>
                    <div className='bg-white w-50' style={{ height: "2px" }}></div>
                </div>
                <div className='google mx-auto' onClick={handlerGoogle} >
                    <img src={img} alt="" /> <span> Google Sign In</span>
                </div>
               
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;