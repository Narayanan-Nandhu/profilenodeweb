import React from "react";
import { Col, Container } from "react-bootstrap";
import { Row, Button } from "react-bootstrap";
import Resume from "../../data/Narayanan.pdf";

const AboutMe = () => {

    return (
        <React.Fragment>
            <Container className="about-me"  id="aboutMe">
                <Row className="justify-content-md-center justify-content-xs-center justify-content-sm-center">
                    <Col>
                        <h3><strong>About Me</strong></h3>
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
                            <Button
                                id="resume"
                                href={Resume}
                                className="resume-button"
                                target="_blank"
                                value="Save Resume"
                                rel="noreferrer"

                            >
                                Save Resume
                            </Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment >
    )
}

export default AboutMe;
