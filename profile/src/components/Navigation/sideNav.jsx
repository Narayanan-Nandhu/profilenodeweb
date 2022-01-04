import React from "react";
import { Offcanvas, Nav } from "react-bootstrap";

const SideNav = (props) => {

  const { navList, show, handleClose } = props;
  return (
    <React.Fragment>
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Narayanan Srinivasan</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-start flex-grow-1 pe-3">
            {navList.map((navItem) => {
              return (<Nav.Link href={navItem.href}>{navItem.name}</Nav.Link>)
            })}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>)
};

export default SideNav;