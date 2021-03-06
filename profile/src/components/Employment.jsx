import React from "react";
import { Row, Container } from "react-bootstrap"
import TileComponent from './Tile/TileComponent';
import EmploymentData from '../data/Employment.json';

const Employment = () => {
  return (
    <Container className="tile" >
       <h3><strong>Employment</strong></h3>
      <Row className="justify-content-md-center">
          {EmploymentData.map((value, key) => {
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
}

export default Employment;
