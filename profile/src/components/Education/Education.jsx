import React from "react";
import { Row, Container } from "react-bootstrap";
import EducationData from "../../data/Education.json"
import TileComponent from "../Tile/TileComponent";


const Education = () => {
  return (
    <Container className="tile" >
       <h3><strong>Education</strong></h3>
      <Row className="justify-content-md-center">
          {EducationData.map((value, key) => {
            return (
              <React.Fragment key={key}>
                <TileComponent 
                id={key} 
                logoSrc={value.logoSrc} 
                tileName={value.tileName} 
                tileHeader={value.tileHeader} 
                duration={value.duration} 
                tileDescription={value.tileDescription} 
                tileSubheader = {value.tileSubheader}
                />
                </React.Fragment>
            )
          })}       
      </Row>
    </Container>
  )
};

export default Education;

