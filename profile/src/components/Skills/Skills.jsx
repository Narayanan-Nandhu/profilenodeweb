import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Data from "../../data/data.json";
import { motion } from 'framer-motion/dist/framer-motion';

const skills = () => {
  return (
    <React.Fragment>
      <Container id="skills">
      <Row className="justify-content-md-center justify-content-xs-center justify-content-sm-center">
        <Col>
        <h3><strong>Skills</strong></h3>
        <Row>
            <Col>
              <h4 className="skills-type-head">Primary</h4>
              <div className="skills-section">
                {Data.skills.primary.map((value, key) => (
                  <h3 key={key}>
                    <motion.div key={key}  whileTap={{ scale: 0.9 }}>
                    <button className="skills-badge">{value}</button>
                    </motion.div>
                  </h3>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="skills-type-head">Professional</h4>
              <div className="skills-section">
                {Data.skills.professional.map((value,key) => (
                  <h3 key={key}>
                      <motion.div  key={key} whileTap={{ scale: 0.9 }}>
                    <button className="skills-badge">{value}</button>
                    </motion.div>
                  </h3>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default skills;