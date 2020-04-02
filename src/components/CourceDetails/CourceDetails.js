import React, { Component,Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Player, BigPlayButton } from "video-react";

class CourceDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedPage">
          <Row className="topPageOverlay">
            <Container>
              <Row className="topPageContentCourse">
                <Col sm={12} md={6} lg={6}>
                  <h3>Full Dynamic Website with Admin panel</h3>
                  <p>Total Lecture = 30</p>
                  <p>Total Student = 30</p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p>
                    asfkasjdf kjdf kjsdf ;lkjsdf;lsdkfj sdkflksdhflksdjfhlskdfh{" "}
                  </p>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <h2>Skill You get</h2>
              <ul>
                <li>asdfsadf fasd fsdf sdaf </li>
                <li>asdfsadf fasd fsdf sdaf </li>
                <li>asdfsadf fasd fsdf sdaf </li>
                <li>asdfsadf fasd fsdf sdaf </li>
                <li>asdfsadf fasd fsdf sdaf </li>
                <li>asdfsadf fasd fsdf sdaf </li>
                <li>asdfsadf fasd fsdf sdaf </li>
              </ul>
              <Button varient="primary">More Info</Button>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Player>
                <source src="https://www.youtube.com/watch?v=UyQn0BhVqNU" />
                <BigPlayButton position="center" />
              </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CourceDetails;
