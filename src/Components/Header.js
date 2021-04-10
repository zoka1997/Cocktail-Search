import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { FaCcPaypal, FaCcVisa, FaCcAmazonPay } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="container-fluid header-section">
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home">COCKTAIL-APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto">
                 <LinkContainer to="/">
                       <Nav.Link>Home</Nav.Link>
                 </LinkContainer>
                 <LinkContainer to="/about">
                       <Nav.Link>About</Nav.Link>
                 </LinkContainer>
                 </Nav>

                 <Nav className="icons-group">
                     <FaCcPaypal className="icon" color="white" size="25px" />
                     <FaCcVisa className="icon" color="white" size="25px" />
                     <FaCcAmazonPay className="icon" color="white" size="25px" />
                 </Nav>
          </Navbar.Collapse>
          </Navbar>
    </div>
  );
}
