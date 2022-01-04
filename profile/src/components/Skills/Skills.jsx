import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import Data from "../../data/data.json";

const skills = () => {
  return (
    <React.Fragment>
      <Container>
      <div className="general-section">
        {/* <div class="col-md-8 offset-md-3"> */}
          <h2 className="general-sub-section-title">Skills</h2>
          <Row>
            <Col>
              <h4 className="skills-type-head">Primary</h4>
              <div className="skills-section">
                {Data.skills.primary.map((value) => (
                  <h3>
                    <button className="skills-badge">{value}</button>
                  </h3>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="skills-type-head">Professional</h4>
              <div className="skills-section">
                {Data.skills.professional.map((value) => (
                  <h3>
                    <button className="skills-badge">{value}</button>
                  </h3>
                ))}
              </div>
            </Col>
          </Row>
        {/* </div> */}
      </div>
      </Container>
    </React.Fragment>
  );
};

export default skills;