import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {GiFullPizza} from "react-icons/gi"

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          <GiFullPizza className="text-warning" size={40}></GiFullPizza> &nbsp;
          PizzaApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
