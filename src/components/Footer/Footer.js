import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons" 
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footer text-center">
          <Row>
            <Col lg={3} md={3} sm={12} className="p-5">
              <h1>Follow Me</h1>
              <a>Facebook</a>
              <a>Twitter</a>
            </Col>
            <Col lg={3} md={3} sm={12} className="p-5">
              <h1>Address</h1>
              <p>Kollanpu Mddho paikpara</p>
              <p>9238479023847</p>
            </Col>
            <Col lg={3} md={3} sm={12} className="p-5">
              <h1>Information</h1>
              <Link to="/about">About Me</Link>
              <Link to="/contact">Contact Me</Link>
            </Col>
            <Col lg={3} md={3} sm={12} className="p-5">
              <h1>Legal</h1>
              <Link to="/Refund">Refund Policy</Link>
              <Link to="/Terms">Terms and Condition</Link>
              <Link to="/Privacy">Privacy Policy</Link>
            </Col>
          </Row>
        </Container>
        <Container className="text-center copy" fluid={true}>
            <a>Amir &copy 2020</a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
