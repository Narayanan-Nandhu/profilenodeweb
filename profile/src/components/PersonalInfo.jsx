import React from "react";
import { Container } from "react-bootstrap";

import { Github } from "@styled-icons/bootstrap/Github";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Mail } from "@styled-icons/entypo/Mail"

const PersonalInfo = () => {
  return (
    <Container className="personal-info">
      <dl>
        <dt>Phone:</dt>
        <dd>
          <a href="tel:+919500870204">+91 9500 870 204</a>
        </dd>
        <dt>Email:</dt>
        <dd>
          <a href="mailto:nandhusumn1090@gmail.com">nandhusumn1090@gmail.com</a>
        </dd>
        <dt>Address:</dt>
        <dd>
          <a href="google.com">Puducherry, India</a>
        </dd>
      </dl>

      <div className="profileLogo">
        <a href="https://github.com/Narayanan-Nandhu">
          <Github size="25" />
        </a>
        <a href="https://www.linkedin.com/in/narayanan-srinivasan-1090">
          <Linkedin size="25" />
        </a>
        <a href="mailto:nandhusumn1090@gmail.com">
          <Mail size="25" />
        </a>
      </div>
    </Container>
  );
};

export default PersonalInfo;