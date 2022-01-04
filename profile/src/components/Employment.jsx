import React from "react";
import TcsImg from "../../src/data/Tcs.jpg";
import { Row, Container, Col, Figure } from "react-bootstrap"


const Employment = () => {
  return (
    <Container>
      <div className="general-section">
        <h2 className="general-sub-section-title">EMPLOYMENT</h2>
        <Container className="employer-card-section justify-content-md-center">
          <Row>
            <Col  md={3} lg={3} sm={12} xs>
            <Container className='employer-logo-container'>
              <Figure className='employer-logo'>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={TcsImg}
                />
              </Figure>
            </Container>
            </Col>
            <Col md={9} lg={7} sm={12} xs>
       
              <h4 className="position-title">Web Developer</h4>
              <a
                className="employer-name"
                href="https://tcs.com"
                target="_blank"
                rel="noreferrer"
              >
                Tata Consultancy Services
              </a>
              <p className="employer-date">May 2019 - Present</p>
              
              <p className="employer-card-information">
            Collaboratively works with the team to build the web
            application as per the proposed design. Responsible for
            development, testing of web application for an enterprise
            with larger consumer audience.
          </p>

            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}

export default Employment;

// return (
//   <Container>
//     <div className="general-section">

//       {/* <div class="col-md-6 offset-md-3"> */}
//       <h2 className="general-sub-section-title">EMPLOYMENT</h2>
//       <div className="employer-subsection">
//         <div className="employer-card-section">
//           <div className="employer-card-header-section">
//             <img
//               src={TcsImg}
//               alt="Employer Logo"
//               className="employer-logo"
//             />
//             <div className="employer-card-info">
//               <h4 className="position-title">FRONTEND ENGINEER</h4>
//               <a
//                 className="employer-name"
//                 href="https://tcs.com"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Tata Consultancy Services
//               </a>
//               <p className="employer-date">May 2019 - Present</p>
//             </div>
//           </div>
//           <p className="employer-card-information">
//             Collaboratively works with the team to build the web
//             application as per the proposed design. Responsible for
//             development, testing of web application for enterprise
//             application with larger consumer audience.
//           </p>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   </Container>
// )