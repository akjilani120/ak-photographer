import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    const handleSignIn=() =>{
        navigate("/signin")
    }
    return (
        <div>
            <h1>I am login page</h1>
            <button onClick={handleSignIn} className='btn btn-primary'>Have you account</button>
        </div>
    );
};

export default Login;