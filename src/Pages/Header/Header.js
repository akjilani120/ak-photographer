import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link ><CustomLink className="navigataion-list" to='/'>Home</CustomLink></Nav.Link>
                            <Nav.Link ><CustomLink className="navigataion-list" to='/about'>About</CustomLink></Nav.Link>
                            <Nav.Link><CustomLink className="navigataion-list" to='/blogs'>Blogs</CustomLink></Nav.Link>
                            <Nav.Link >
                            <CustomLink to=''></CustomLink>
                            </Nav.Link>
                        </Nav>
                        <Nav className="">
                        <Nav.Link><CustomLink className="navigataion-list nav-login " to='/login'>Login</CustomLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;