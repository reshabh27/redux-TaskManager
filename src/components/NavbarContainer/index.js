import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import header from '../../images/header.png'


const NavbarContainer = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={header}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="task manager logo"
            />{" "}
            Task manager
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarContainer;