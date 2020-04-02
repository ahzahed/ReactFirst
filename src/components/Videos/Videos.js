import React, { Component, Fragment } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";

class Videos extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col className="videoCard" lg={12} md={12} sm={12}>
              <div>
                <p className="videoTitle">How I Do</p>
                <p className="videoDes">
                  A quick brown fox jumps over the lazy dog. A quick brown fox
                  jumps over the lazy dog. A quick brown fox jumps over the lazy
                  dog.
                </p>
                <p>
                  <FontAwesomeIcon
                    onClick={this.modalOpen}
                    className="playBtn"
                    icon={faPlayCircle}
                  />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Player>
                <source src="https://www.youtube.com/watch?v=UyQn0BhVqNU" />
                <BigPlayButton position="center" />
              </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Videos;
