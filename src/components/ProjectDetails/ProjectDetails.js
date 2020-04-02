import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo3 from "../../asset/image/3.jpg";

class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img width="100%" src={logo3} />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h2>Foll Bazzer</h2>
              <p>alksdfjlk dfjksdfhklsdfjh ksdjlf hdf</p>
              <ul>
                  <li>asldkfjlksdjf df dsf sd</li>
                  <li>asldkfjlksdjf df dsf sd</li>
                  <li>asldkfjlksdjf df dsf sd</li>
                  <li>asldkfjlksdjf df dsf sd</li>
                  <li>asldkfjlksdjf df dsf sd</li>
                  <li>asldkfjlksdjf df dsf sd</li>
                  <li>asldkfjlksdjf df dsf sd</li>
              </ul>
              <Button variant="primary">More Info</Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProjectDetails;
