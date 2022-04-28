import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { motion } from 'framer-motion/dist/framer-motion';


const TileComponent = (props) => {
  return (
    <React.Fragment key={props.id}>
      <Col xl={6} lg={6} sm={12} md={12} xs={12} id={props.id}>
      <motion.div whileTap={{scale: .99}} className="container tile-box">
          <Row>
            <Col xl={4} lg={4} sm={4} md={4} xs={12}>
              <Row className="tile-logo-image">
                <Image
                  thumbnail
                  className="tile-logo-image"
                  src={`/images/${props.logoSrc}`}
                />
              </Row>
              <Row>
                <div className="tile-logo-name">
                  <h5>
                    <strong>{props.tileName}</strong>
                  </h5>
                  <h6>{props.duration}</h6>
                </div>
              </Row>
            </Col>
            <Col xl={8} lg={8} sm={8} md={8} xs={12} className="tile-second-half">
              <div className="tile-details">
                <Row className="tile-header">
                  <h4>
                    <strong>{props.tileHeader}</strong>
                  </h4>
                </Row>
                <Row className="tile-subheader">
                  <h5>{props.tileSubheader}</h5>
                </Row>
                <Row className="tile-description">
                  <p>
                    {props.tileDescription}
                  </p>
                </Row>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Col>
    </React.Fragment>
  );
};

export default TileComponent;
