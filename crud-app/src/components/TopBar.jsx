import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';


function TopBar() {
  let { pathname } = useLocation()
  // console.log(location)

  return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='text-decoration-none mr-10' to={'/'}><Navbar.Brand>User Management</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className={`text-decoration-none mr-10 ${pathname === '/' ? "active" : ""}`} to='/'><div>Home</div></Link>
          <Link className={`text-decoration-none mr-10 ${pathname === '/dashboard' ? "active" : ""}`} to='/dashboard'><div>Dashboard</div></Link>
          <Link className={`text-decoration-none mr-10 ${pathname === '/create' ? "active" : ""}`} to='/create'><div>Create</div></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
}

export default TopBar