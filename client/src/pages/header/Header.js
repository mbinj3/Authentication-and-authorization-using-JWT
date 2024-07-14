import React from 'react';
import './Header.css';
import {Navbar,Container, Nav, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Header(){
    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    const handleLogOut = () => {
      localStorage.removeItem("token");
      navigate('/login');
    }

    return(
        <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
        <Navbar.Brand>
          <strong>{token ? "LoggedIn" : "Not-LoggedIn"}</strong>
        </Navbar.Brand>
        <Nav className='ms-auto'>
        {token ? (
          <>
            <NavLink as={Link} to='/dashboard' className='nav-link'>
            Dashboard
            </NavLink>
            <NavLink className='nav-link' onClick={handleLogOut}>
            Logout
            </NavLink>
          </>  
        ):(
          <>
            <NavLink as={Link} to='/login' className='nav-link'>
            Login
            </NavLink>
            <NavLink as={Link} to='/signup' className='nav-link'>
            Signup
            </NavLink>
          </>  
        )}  
        
        </Nav>
      </Container>
    </Navbar>
    )
}

export default Header