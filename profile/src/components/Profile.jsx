import React from "react";
import NavBar from "./Navigation/NavBar";
import Footer from "./Footer/Footer";
import NavData from "../data/Header.json";
import { Row, Col, Container, Image, Button, } from "react-bootstrap";
import ProfilePic from "../../src/data/ProfilePic.png"; 
import { Github } from "@styled-icons/bootstrap/Github";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Email } from "@styled-icons/evaicons-solid/Email";
import Resume from "../data/Narayanan_2.pdf";
import Employment from "./Employment";
// import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills/Skills";
const Profile = () => {
  return (
    <React.Fragment>
      <Container fluid className="jumbotron header-modal jumbotron-mobile">
        <Row>
          <Col md={12} lg={12} >
            <NavBar navList={NavData} />
          </Col>
        </Row>
        <Row  id="home">
          <Col sm={2} md={5} lg={4} xl={4}>
            <Image src={ProfilePic} className="profileImage" roundedCircle />
          </Col>
          <Col  sm={10} md={7} xl={8} className="profileInfo">
            <Container>
              <div style={ {margin: "2rem"} } >
              <h1>
                <strong>Narayanan Srinivasan</strong>
              </h1>
              <h4>Software Developer</h4>
              </div>
              <div className="profile-communication-links">
                <a href="https://github.com/Narayanan-Nandhu">
                  <Github size="25" />
                </a>
                <a href="https://www.linkedin.com/in/narayanan-srinivasan-1090">
                  <Linkedin size="25" />
                </a>
                <a href="mailto:nandhusumn1090@gmail.com">
                  <Email size="30" />
                </a>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container id="aboutMe" className="section-1">
        <div className="general-section">
          <Row className="justify-content-md-center">
            <Col>
              <h2 className="general-section-title"><strong>About Me</strong></h2>
              <div class="general-section--description">
                <p>
                  Hi, I'm Narayanan, a Software Engineer specialized in
                  <strong> web development</strong>. Always trying to learn new
                  things in a <strong>self-learning</strong> manner and apply them
                  to solve all challenges.
                </p>
                <p>
                  Skilled at developing well-designed and efficient
                  <strong> modern web applications</strong> using trending
                  technologies such as React.js, Node.js, Express, MongoDB.
                  <strong> Passionate, Fast learner and team player</strong>. Always
                  takes things with proactive mindset.
                </p>
              </div>
              <Button
              id="resume"
                href={Resume}
                className="pill-button"
                target="_blank"
                value="Save Resume"
                rel="noreferrer"
                
              >
                Save Resume
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
      <Skills />
      <Employment />
      <Education />
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
