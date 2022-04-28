import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel
} from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import PersonalInfo from "../PersonalInfo";

import "./Footer.css";
toast.configure();


const Footer = () => {
  const [emailInputError, emailInputErrorState] = useState(false);
  const [emailBodyInputError, emailBodyInputErrorState] = useState(false);
  const [nameInputError, nameInputErrorState] = useState(false);
  // eslint-disable-next-line
  const emailRegexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  // value field useState handlers
  const [userEmailAddress, setUserEmailAddress] = useState("");
  const [emailBodyContent, setEmailBodyContent] = useState("");
  const [userName, setUserName] = useState("");


  const [mailerState, setMailerState] = useState({
    userEmailAddress,
    emailBodyContent,
    userName
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    (userEmailAddress === '') ?  emailInputErrorState(true) : emailInputErrorState(false);
    (emailBodyContent === '') ? emailBodyInputErrorState(true) : emailBodyInputErrorState( false);
    (userName === '') ? nameInputErrorState(true) : nameInputErrorState(false)

    if(userEmailAddress === '' || emailBodyContent === '' || userName === '' ) 
       return;

    setMailerState(prevState => ({
      ...prevState,
      userEmailAddress,
      emailBodyContent,
      userName
    }));

    const resultObj = {
      name: mailerState.userName,
      email: mailerState.userEmailAddress,
      message: mailerState.emailBodyContent
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
          <ToastContainer />
          toast.success("Mail Sent Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        } else if (resData.mailDeliveryStatus === "failed") {
          <ToastContainer />
          toast.error("Sorry for the incovenience, We're facing issue at this moment", {
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
    <Container fluid className="footer-container" id='contact'>
      <Row>
        <Col xl={6} lg={6} sm={12} xs={12}>
          <Container className="footer-first-half">
            <PersonalInfo/>
          </Container>
        </Col>
        <Col xl={6} lg={6} sm={12} xs={12}>
          <Container className="footer-mail-box">
            <Form className="mailing-form">
              
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                aria-required
                label="Email Address"
              >
                  <FloatingLabel controlId="floatingTextarea2" label="Email Address">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={userEmailAddress}
                  className={`${emailInputError} ? 'error-state' : ''`}
                  onChange={(e) => {
                    setUserEmailAddress(e.target.value);
                    emailInputErrorState(false);
                    if (!userEmailAddress || !emailRegexPattern.test(userEmailAddress) ) {
                      emailInputErrorState(true);
                    }
                  }}
                />
                </FloatingLabel>
                {emailInputError && (
                  <span
                    style={{
                      color: "#FF0000",
                      float: "left",
                      padding: "2px"
                    }}
                    class="error-message"
                  >
                    &#9888; Please enter your email address
                  </span>
                )}
              </Form.Group>
            
              <Form.Group
                className="mb-3"
                controlId="formBasicText"
                aria-required
                label="Name"
              >
                  <FloatingLabel controlId="floatingTextarea2" label="Name">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  className={`${nameInputError} ? 'error-state' : ''`}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    nameInputErrorState(false)
                    if (!userName) {
                      nameInputErrorState(true);
                    } 
                  }}
                />
                </FloatingLabel>
                {nameInputError && (
                  <span
                    style={{
                      color: "#FF0000",
                      float: "left",
                      padding: "2px"
                    }}
                    class="error-message"
                  >
                    &#9888; Please enter your name
                  </span>
                )}
              </Form.Group>
              <Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Message">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here..."
                    style={{ height: "100px" }}
                    value={emailBodyContent}
                    onChange={(e) => {
                      setEmailBodyContent(e.target.value);
                      emailBodyInputErrorState(false);
                      if (!emailBodyContent) {
                        emailBodyInputErrorState(true);
                      } 
                    }}
                  />
                </FloatingLabel>
                {emailBodyInputError && (
                  <span
                    style={{
                      color: "#FF0000",
                      float: "left",
                      padding: "2px"
                    }}
                    class="error-message"
                  >
                    &#9888; Please enter your email content
                  </span>
                )}
              </Form.Group>
              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={onSubmitHandler}
                  className="send-button"
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  </footer>
);
}

export default Footer;
