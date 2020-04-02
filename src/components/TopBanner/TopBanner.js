import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner">
          <Row className="topBannerOverlay">
            <Container>
              <Row className="topContent">
                <Col className="text-center">
                  <h1 className="topTitle">Software Engineer</h1>
                  <h4 className="topSubTitle">Mobile & Web Application</h4>
                  <Button variant="primary">Primary</Button>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
