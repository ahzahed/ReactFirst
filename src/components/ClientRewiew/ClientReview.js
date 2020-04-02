import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from '../../asset/image/1.png';
import logo2 from '../../asset/image/2.png';
import logo3 from '../../asset/image/3.jpg';

class ClientReview extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 3000,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Clients Says</h1>
          <Slider {...settings}>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                <img className="circleImage" src={logo1} />
                <h1>Web Development</h1>
                <p>Aasdf sadf sadf asd fsd fas df asdf asdf asd fsad fsda fsad f sdaf sadf sdf sadf sdaf sd fsad fs df sadf sadf sad f sdf asdf sadf sd fsa df sdf sdf sdf sdf</p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                <img className="circleImage" src={logo2} />
                <h1>Web Development</h1>
                <p>Aasdf sadf sadf asd fsd fas df asdf asdf asd fsad fsda fsad f sdaf sadf sdf sadf sdaf sd fsad fs df sadf sadf sad f sdf asdf sadf sd fsa df sdf sdf sdf sdf</p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                <img className="circleImage" src={logo3} />
                <h1>Web Development</h1>
                <p>Aasdf sadf sadf asd fsd fas df asdf asdf asd fsad fsda fsad f sdaf sadf sdf sadf sdaf sd fsad fs df sadf sadf sad f sdf asdf sadf sd fsa df sdf sdf sdf sdf</p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
