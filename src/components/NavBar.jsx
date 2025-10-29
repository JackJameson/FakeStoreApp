import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar bg="info" variant="dark" expand="lg" className="p-3 mb-4">
      <Navbar.Brand href="/">Fake Store App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/" activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" activeclassname="active">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/addproduct" activeclassname="active">
            Add Product
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
