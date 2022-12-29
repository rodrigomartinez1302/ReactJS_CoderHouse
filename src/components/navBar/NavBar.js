import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../cartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function MainNavBar({ cartCount }) {
  return (
    <Navbar bg="light" expand="md" className="mainNavBar">
      <Navbar.Brand href="#home" className="logo">
        <img
          alt=""
          src={require("./logo.jpeg")}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>

      <div className="simpleNavBar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar">
          <Nav className="me-auto basicNavBar">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Build your Portfolio</Nav.Link>
            <Nav.Link href="#link">Photographers</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Photo Stock</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="cart">
        <CartWidget cartCount={cartCount}></CartWidget>
      </div>
    </Navbar>
  );
}

export default MainNavBar;
