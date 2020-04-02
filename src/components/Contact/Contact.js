import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1>Quick Connect</h1>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1>Discuss Now</h1>
              <p>Kollanpu Mddho paikpara</p>
              <p>9238479023847</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default contact;
