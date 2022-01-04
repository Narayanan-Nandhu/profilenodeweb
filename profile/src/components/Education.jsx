import React from "react";
import Smvec from "../../src/data/Smvec.png";
import Nmvmhss from "../../src/data/Nmvmhss.jpg"
import { Row, Col, Container, Figure } from "react-bootstrap";
import EducationData from "../data/Education.json"


const Education = () => {
  return (
    <Container id="portFolio">
      <div className="general-section">
        <h2 className="general-sub-section-title">EDUCATION</h2>

        {EducationData.map((eduData) => {
          const sourceImg = eduData.imgSrc === "Smvec" ? Smvec : Nmvmhss; 
         return( <Container className="employer-card-section justify-content-md-center">
            <Row>
              <Col md={3} lg={3} sm={12} xs>
                <Container className='employer-logo-container'>
                  <Figure className='employer-logo'>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={sourceImg}
                    />
                  </Figure>
                </Container>
              </Col>
              <Col md={9} lg={7} sm={12} xs>

                <h5 className="position-title">{eduData.course}</h5>
                <a
                  className="employer-name"
                  href={eduData.instituteHref}
                  target="_blank"
                  rel="noreferrer"
                >
                {eduData.where}
                </a>
                <p className="employer-date">{eduData.period}</p>
                <p className="employer-card-information">
                  {eduData.description}
                </p>
              </Col>
            </Row>
          </Container>)
        })}
      </div>
    </Container>
  )
};

export default Education;

