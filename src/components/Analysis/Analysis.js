import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BarChart, ResponsiveContainer, Bar, XAxis, Tooltip } from "recharts";

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Technology: "Java", Projects: 100 },
        { Technology: "Kotlin", Projects: 60 },
        { Technology: "sql", Projects: 46 },
        { Technology: "Bootstrap", Projects: 28 },
        { Technology: "Jquery", Projects: 73 },
        { Technology: "Angular", Projects: 64 },
        { Technology: "PHP", Projects: 81 },
        { Technology: "Laravel", Projects: 23 }
      ]
    };
  }
  render() {
    var blue = "rgba(0,115,230,0.8";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Technology Used</h1>
          <Row>
            <Col
              lg={6}
              md={12}
              sm={12}
              style={{ width: "100%", height: "300px" }}
            >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-justify">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
