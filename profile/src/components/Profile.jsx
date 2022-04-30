import React from "react";
import NavBar from "./Navigation/NavBar";
import Footer from "./Footer/Footer";
import NavData from "../data/Header.json";
import { Row, Col, Container, Image } from "react-bootstrap";
import ProfilePic from "../../src/data/ProfilePic.png";
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { MailWithCircle } from '@styled-icons/entypo-social/MailWithCircle'
import { Github } from '@styled-icons/evaicons-solid/Github';
import TextAnimation from "./Animations/TextAnimation";
import AnimatedIcon from "./Animations/AnimatedIcon";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Employment from "./Employment";
import Education from "./Education/Education";
import { motion } from 'framer-motion/dist/framer-motion';
import useEventTracker from "../Analytics/AnalyticsTracker";


const Profile = () => {

  const gaEventTrigger = useEventTracker();
  return (
    <React.Fragment>

      <Container fluid className="landing" id="home">
        <Row>
          <Col md={12} lg={12} >
            <NavBar navList={NavData} />
          </Col>
        </Row>
        <Row>
          <Col className="landing-firsthalf" xs={12} sm={12} md={6}>
            <Container>
              <Container className="name-container">
                <TextAnimation delay={0} component={<h2><strong>Hello, I'm</strong></h2>} />
                <TextAnimation delay={0.5} component={<h2><strong>Narayanan Srinivasan</strong></h2>} />
                <TextAnimation delay={1} component={<h4><strong>UI Developer</strong></h4>} />
              </Container>
              <Container className="icon-container">
                <span className="contact-icons" id="linked-in">
                  <a href="https://www.linkedin.com/in/narayanan-srinivasan-1090">
                    <AnimatedIcon delay={0} component={<LinkedinWithCircle size='30' onClick={() => gaEventTrigger('Profile:home', 'linkedIn')}/>} />
                  </a>
                </span>

                <span className="contact-icons" id="email">
                  <a href='mailto: nandhusuman1090@gmail.com'>
                    <AnimatedIcon delay={0.5} component={<MailWithCircle size='30' onClick={() => gaEventTrigger('Profile:home', 'email')}/>} />
                  </a>
                </span>
                <span className="contact-icons" id="gitHub">
                  <a href="https://github.com/Narayanan-Nandhu">
                    <AnimatedIcon delay={1} component={<Github size='30' onClick={() => gaEventTrigger('Profile:home', 'gitHub')}/>} />
                  </a>
                </span>
              </Container>
            </Container>
          </Col>
          <Col className="landing-secondHalf" xs={12} sm={12} md={6}>
            <Container className="image-container">
              <motion.div
                initial={{ z: 500, opacity: 0 }}
                animate={{ z: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1, duration: 1 }}>
                <Image src={ProfilePic} alt='Profile Image' className="profile-image" roundedCircle />
              </motion.div>
            </Container>
          </Col>
        </Row>
      </Container>
      <motion.div initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} >
        <AboutMe />
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} >
        <Skills />
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} >
        <Employment />
      </motion.div>
      <div id="portFolio"></div>
      <motion.div initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} >
        <Education />
      </motion.div>
      <Footer/>
    </React.Fragment>
  );
};

export default Profile;
