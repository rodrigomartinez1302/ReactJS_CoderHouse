import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "@material-ui/core";
import CartWidget from "../cartWidget/CartWidget";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MainNavBar({ cartCount }) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <div className="mainNavBar">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("./logo.jpeg")}
              width="40"
              height="40"
              className="d-inline-block align-top logo"
            />{" "}
          </Navbar.Brand>

          <div className="simpleNavBar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto basicNavBar">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Build your Portfolio</Nav.Link>
                <Nav.Link href="#link">Photographers</Nav.Link>
                <Nav.Link href="#link">Pricing</Nav.Link>
                <Nav.Link href="#link">Photo Stock</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <CartWidget cartCount={cartCount}></CartWidget>
        </div>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
