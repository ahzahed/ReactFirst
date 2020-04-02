import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from "../../asset/image/1.png";
import logo2 from "../../asset/image/2.png";
import logo3 from "../../asset/image/3.jpg";
import { Link } from "react-router-dom";
class Cources extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">OUR COURCES</h1>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img src={logo1} className="courceImage" />
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <h5 className="courseTitle">Web Development</h5>
                  <p className="courseDes">
                    A quick brown fox jumps over the lazy dog
                  </p>
                  <Link className="courseDetails" to="/CoursetDetails">
                    Details
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img src={logo2} className="courceImage" />
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <h5 className="courseTitle">Web Development</h5>
                  <p className="courseDes">
                    A quick brown fox jumps over the lazy dog
                  </p>
                  <Link className="courseDetails" to="/CoursetDetails">
                    Details
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img src={logo3} className="courceImage" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="courseTitle">Web Development</h5>
                  <p className="courseDes">
                    A quick brown fox jumps over the lazy dog
                  </p>
                  <Link className="courseDetails" to="/CoursetDetails">
                    Details
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img src={logo1} className="courceImage" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="courseTitle">Web Development</h5>
                  <p className="courseDes">
                    A quick brown fox jumps over the lazy dog
                  </p>
                  <Link className="courseDetails" to="/CoursetDetails">
                    Details
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Cources;
