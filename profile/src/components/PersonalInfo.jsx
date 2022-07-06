import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedIcon from "./Animations/AnimatedIcon";
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { MailWithCircle } from '@styled-icons/entypo-social/MailWithCircle'
import { Github } from '@styled-icons/evaicons-solid/Github';
import { Codesandbox } from '@styled-icons/simple-icons/Codesandbox'
import useEventTracker from "../Analytics/AnalyticsTracker";

const PersonalInfo = () => {
  const gaEventTrigger = useEventTracker();
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h3><strong>Contact me at</strong></h3>
          <Row className="justify-content-md-center">
            <dl>
              <dt>Email:</dt>
              <dd>
                <a href="mailto:nandhusumn1090@gmail.com" id="personal-info">nandhusumn1090@gmail.com</a>
              </dd>
              <dt>Address:</dt>
              <dd>
                <a href="https://goo.gl/maps/xh6dJorANTgqC8Hq5" id="personal-info">No.10, Goubert Pada Salai St,<br />Puducherry-605002,<br />India</a>
              </dd>
            </dl>
          </Row>
          <Container className="icon-container">
            <span className="contact-icons" id="linked-in personal-info">
              <a href="https://www.linkedin.com/in/narayanan-srinivasan-1090">
                <AnimatedIcon delay={0} component={<LinkedinWithCircle size='30'  onClick={() => gaEventTrigger('Footer:PersonalInfo', 'linkedIn')}/>} />
              </a>
            </span>

            <span className="contact-icons" id="email personal-info">
              <a href='mailto: nandhusuman1090@gmail.com'>
                <AnimatedIcon delay={0.5} component={<MailWithCircle size='30'  onClick={() => gaEventTrigger('Footer:PersonalInfo', 'Mail')}/>} />
              </a>
            </span>
            <span className="contact-icons" id="gitHub personal-info">
              <a href="https://github.com/Narayanan-Nandhu">
                <AnimatedIcon delay={1} component={<Github size='30' onClick={() => gaEventTrigger('Footer:PersonalInfo', 'Github')}/>} />
              </a>
            </span>
            <span className="contact-icons" id="codesandbox personal-info" onClick={() => gaEventTrigger('Footer:PersonalInfo', 'codeSandbox')}>
              <a href="https://codesandbox.io/u/Narayanan-Nandhu">
                <AnimatedIcon delay={1.5} component={<Codesandbox size='30' />} />
              </a>
            </span>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalInfo;