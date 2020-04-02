import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner summarySection">
          <Row className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col className="countTitle">
                      <h1 className="countNumber">
                        <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <div>
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            </div>
                          )}
                        </CountUp>
                      </h1>
                      <h4>Total Projects</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                    <Col className="countTitle">
                      <h1>
                        <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <div>
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            </div>
                          )}
                        </CountUp>
                      </h1>
                      <h4>Total Projects</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle text-justify">
                        How I word
                      </Card.Title>
                      <Card.Text>
                        <ul>
                        <li className="cardSubTitle text-justify">
                          Requirement Gathering
                        </li>
                        <li className="cardSubTitle text-justify">
                          System Analysis
                        </li>
                        <li className="cardSubTitle text-justify">
                          Coding Testing
                        </li>
                        <li className="cardSubTitle text-justify">
                          Implementation
                        </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
