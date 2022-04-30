import React, { useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import {  motion } from 'framer-motion/dist/framer-motion'
import { MenuArrowOutline } from '@styled-icons/evaicons-outline/MenuArrowOutline'
import './NavBar.css'
import useEventTracker from "../../Analytics/AnalyticsTracker";

const NavBar = (navdata) => {
  const { navList } = navdata;

  const [scrolled, setscrolled] = useState(false);
  // const [show, setShow] = useState(false)
  const [isOpen, setOpen] = useState(false);
  const gaEventTrigger = useEventTracker();
  window.onscroll = function () {
    if (window.pageYOffset > 0) {
      setscrolled(true);
    } else {
      setscrolled(false)
    }
  }
  const handleOnExit = () => {
    var url = window.location.href;
    const urlsubstring = url.substring(url.lastIndexOf('#') + 1);
    var element = (((urlsubstring).includes("/")) ? "home" : urlsubstring) ?? "home";
    var elmnt = document.getElementById(element);
    elmnt.scrollIntoView();
  } 

  return (
    <React.Fragment>
      <motion.div initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .5 }}>
        <Navbar className={`nav-bar ${scrolled ? 'scrolled' : ''}`} fixed="top" expand='lg' expanded={isOpen}>
          <Navbar.Brand className="home-page" href="#home" onClick={handleOnExit}>
            {'👨‍💻'} </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"  onClick={() => { setOpen(isOpen ? false : "expanded");}}><MenuArrowOutline size={30} /></Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            className="offcanvasNavbar-custom"
            aria-labelledby="offcanvasNavbar"
            placement="start"
            restoreFocus={false}
            collapseonselect={true}
            onExited={handleOnExit}
          >
            <Offcanvas.Header closeButton onClick={() => setOpen(false)}>
              <Offcanvas.Title id="offcanvasNavbarLabel">Hey there,</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 nav-list-canvas">
                {navList.map((navItem, key) => {
                  return (<Nav.Link key={key} className="nav-items-link-canvas" onClick={() => { setOpen(false);}} href={navItem.href}>{navItem.name}</Nav.Link>)
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`m-auto ${scrolled ? 'nav-item-scrolled' : ''}`}>
              {navList.map((navItem, key) => {
                return (<Nav.Link key={key} className="nav-items-design" href={navItem.href} onClick={() => { gaEventTrigger('Nav|Bar: ', navItem.href)}}>{navItem.name}</Nav.Link>)
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </motion.div>
    </React.Fragment>
  )
};

export default NavBar;