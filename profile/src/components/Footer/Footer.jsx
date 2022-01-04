import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  FloatingLabel,
  Form,
  Button,
  Toast
} from "react-bootstrap";
import PersonalInfo from '../PersonalInfo';
// import sendEmail from '../../Service/nodeMailer'
import { MailCheckmark } from "@styled-icons/fluentui-system-filled/MailCheckmark";
import { MailError } from "@styled-icons/fluentui-system-filled/MailError";

import { toast, ToastContainer } from 'react-toastify';
toast.configure();

const Footer = () => {
  const [mailerState, setMailerState] = useState({
    email: "",
    name: "",
    message: ""
  })

  const handleOnchange = (e) => {
    setMailerState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultObj = {
      name: mailerState.name,
      email: mailerState.email,
      message: mailerState.message
    }
    await fetch(`/api/sendmail`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(resultObj),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        if (resData.mailDeliveryStatus === "success") {
          <ToastContainer/>
          toast.success("Mail Sent Successfully",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        } else if (resData.mailDeliveryStatus === "failed") {
          <ToastContainer/>
          toast.error("Sorry for the incovenience, We're facing issue at this moment",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });


  }
  return (
    <footer>
      <Container fluid id="contact" className="footer-section">
        <Row>
          <div className="content-section">
            <h3>Contact me at</h3>
            <Row>
              <Col md={6}>
                <div className="footer-info personal-info">
                  <PersonalInfo />
                </div>
              </Col>
              <Col md={6} xl={6} lg={6} sm={12}>
                <div className="footer-info mail-info">
                  <h5>Write me a mail . . .</h5>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Col>
                        <Form.Control type="text" placeholder="Your Name" name="name" value={mailerState.name} onChange={handleOnchange} />
                        <br />
                        <Form.Control
                          type="email"
                          value={mailerState.email}
                          placeholder="Your email address"
                          onChange={handleOnchange}
                          name="email"

                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Col>
                        <Form.Control
                          as="textarea"
                          style={{ height: 200 }}
                          type="password"
                          size="md"
                          name="message"
                          value={mailerState.message}
                          placeholder="start typing your message here . . ."
                          onChange={handleOnchange}
                        />
                      </Col>
                    </Form.Group>
                    <Row>
                      <Col>
                        <Button variant="light" type="submit" className='submit-button'>
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
