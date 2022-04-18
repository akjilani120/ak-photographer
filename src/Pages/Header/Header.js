import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import logoImg from '../img/main logo.png'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar sticky="top" className='navbar' collapseOnSelect expand="lg"  >
                <Container>
                    <Navbar.Brand as={Link} to="/home"  ><img className='logo-img' src={logoImg} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav " className='nav-list-item'>
                        <Nav className="mx-auto">
                            <Nav.Link ><CustomLink className="navigataion-list" to='/'>Home</CustomLink></Nav.Link>
                            <Nav.Link ><CustomLink className="navigataion-list" to='/about'>About Me</CustomLink></Nav.Link>
                            <Nav.Link><CustomLink className="navigataion-list" to='/mainblogs'>Blogs</CustomLink></Nav.Link>
                           
                        </Nav>
                        <Nav className="">
                            {  user ?                          
                           <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> 
                            : <CustomLink className="navigataion-list nav-login " to='/login'>Login </CustomLink>
                        }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;