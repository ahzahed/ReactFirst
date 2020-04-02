import React, { Component,Fragment } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import logo1 from '../../asset/image/1.png';
import logo2 from '../../asset/image/2.png';
import logo3 from '../../asset/image/3.jpg';
import { Link } from 'react-router-dom';
class AllProjects extends Component {

    render() {
        return (
            <Fragment>
        <Container className="text-center mt-5">
          <Row>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="projectCard">
                <Card.Img height="270px" variant="top" src={logo1} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">Card Title</Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link className="link-style" to="ProjectDetails">Details</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="projectCard">
                <Card.Img height="270px" variant="top" src={logo2} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">Card Title</Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link className="link-style" to="ProjectDetails">Details</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="projectCard">
                <Card.Img height="270px" variant="top" src={logo3} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">Card Title</Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link className="link-style" to="ProjectDetails">Details</Link></Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
        );
    }
}

export default AllProjects;