import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
function TopNavBar() {
  return (
    <Navbar style={{background:"#662671"}}>
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          <img src="logo.jpg" className="img-fluid me-3" width={"50"} />
          <b>Digital</b>flake
        </Navbar.Brand>
        <Nav.Link>
          <i className="bi bi-person-circle text-white fs-3"></i>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
export default TopNavBar
