import React, { useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import navBarScrolled from "../utils";
import { MenuArrow } from '@styled-icons/evaicons-solid/MenuArrow'

const NavBar = (navdata) => {
  const { navList } = navdata;
  navBarScrolled();
  const [show, setShow] = useState(false);
  // const [scrollTo, setScrollTo] = useState('aboutMe');
  const [ scrolled, setscrolled] = useState(false);
const handleSideNavOpen = () => {
  setShow(true);
};

const handleSideNavClose = () => {
  setShow(false);
};

const handleOnExit = () => {
var url = window.location.href;
const urlsubstring = url.substring(url.lastIndexOf('#') + 1);
var element =((urlsubstring).includes("/")) ? "home" : urlsubstring;
var elmnt = document.getElementById(element);
elmnt.scrollIntoView();
}
  window.onscroll = function () {
    var navbar = document.querySelector('.custom-nav-bar');
    if (window.pageYOffset > 0) {
      setscrolled(true)
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
      setscrolled(false)
    }
  }



  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-nav-scroll custom-nav-bar" >
        
        <Navbar.Toggle className="navbar-toggle-position"><MenuArrow size={25} onClick={handleSideNavOpen}/></Navbar.Toggle>
        
        <Offcanvas show={show} onHide={handleSideNavClose} className="off-canvas" restoreFocus={false} onExited={handleOnExit}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Narayanan Srinivasan</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-start flex-grow-1 pe-3 side-nav">
       
            {navList.map((navItem) => {

              return (<Nav.Link href={navItem.href} onClick={handleSideNavClose} >{navItem.name}</Nav.Link>)
            })}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            {navList.map((navItem) => (
              <li class="nav-item">
                <a class={`nav-link navItemText ${scrolled ? 'scrolled-nav-text' : 'nav-text'}`} href={navItem.href}>
                  <strong>{navItem.name}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
};

export default NavBar;