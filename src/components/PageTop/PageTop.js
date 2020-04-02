import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
class PageTop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedPage">
          <Row className="topPageOverlay">
            <Container>
              <Row className="topPageContent">
                <Col className="text-center">
                  <h4 className="topTitle">{this.props.pagetitle}</h4>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default PageTop;
