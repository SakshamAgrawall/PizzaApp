import React from "react";
import { Navbar, Nav,NavDropdown, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {GiFullPizza} from "react-icons/gi"
import { useDispatch,useSelector } from "react-redux";
import {FaUserAlt,FaHome,FaShoppingCart} from "react-icons/fa"
import {MdLogin} from "react-icons/md";
import {logoutUser} from "../actions/userAction"

const NavBar = () => {
  const dispatch=useDispatch();
  const cartState = useSelector((state)=>state.cartReducer);
  const userState = useSelector((state)=> state.loginUserReducer);

  const {currentUser} = userState;
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
                <Nav.Link><FaHome color="white" size={25}></FaHome></Nav.Link>
                </LinkContainer>
              {currentUser ? (
                <NavDropdown title={<FaUserAlt color="white" size={25}></FaUserAlt>}>
                  <LinkContainer to="/orders">
                <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                <NavDropdown.Item onClick={()=>{dispatch(logoutUser())}}>Logout</NavDropdown.Item>
              </NavDropdown>
              ):(
                <LinkContainer to="/login">
                <Nav.Link><MdLogin color="white" size={25}></MdLogin></Nav.Link>
              </LinkContainer>)
              }<LinkContainer to="/Cart">
                <Nav.Link><FaShoppingCart color="white" size={25}></FaShoppingCart>{cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
