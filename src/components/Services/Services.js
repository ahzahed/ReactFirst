import React, { Component, Fragment } from "react";
import logo1 from '../../asset/image/1.png';
import logo2 from '../../asset/image/2.png';
import logo3 from '../../asset/image/3.jpg';
import { Container, Row, Col } from "react-bootstrap";

class componentName extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <h1 className="text-center serviceMainTitle">My Services</h1>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={logo1} style={{ width:"90px" }} alt="Services"></img>
                <h1>Web Development</h1>
                <p>
                  A quick brown fox jumps over the lazy dog. A quick brown fox
                  jumps over the lazy dog. A quick brown fox jumps over the lazy
                  dog.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={logo2} style={{ width:"90px" }} alt="Services"></img>
                <h1>Web Development</h1>
                <p>
                  A quick brown fox jumps over the lazy dog. A quick brown fox
                  jumps over the lazy dog. A quick brown fox jumps over the lazy
                  dog.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={logo3} style={{ width:"90px" }} alt="Services"></img>
                <h1>Web Development</h1>
                <p>
                  A quick brown fox jumps over the lazy dog. A quick brown fox
                  jumps over the lazy dog. A quick brown fox jumps over the lazy
                  dog.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default componentName;
