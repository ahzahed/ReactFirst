import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import logoBefore from "../../asset/image/log.png";
import logoAfter from "../../asset/image/logaf.jpg";
import { NavLink } from "react-router-dom";

class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: "navTitle",
      logo: [logoBefore],
      background: "navBackground",
      navVariant: "dark",
      navBarItem: "navItem",
      pageTitle: props.title
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        logo: [logoAfter],
        background: "navBackgroundScroll",
        navBarItem: "navItemScroll",
        navVariant: "light"
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: "navTitle",
        logo: [logoBefore],
        background: "navBackground",
        navBarItem: "navItem",
        navVariant: "dark"
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.background}
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant={this.state.navVariant}
        >
          <Navbar.Brand href="#home">
            <NavLink className={this.state.navBarTitle} to="/">
              <img
                src={this.state.logo}
                style={{ width: "20px" }}
                alt="TopNavigation"
              />{" "}
              First React
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/"
                  className={this.state.navBarItem}
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/service"
                  className={this.state.navBarItem}
                >
                  Services
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/course"
                  className={this.state.navBarItem}
                >
                  Cources
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/portfolio"
                  className={this.state.navBarItem}
                >
                  Portfolio
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/contact"
                  className={this.state.navBarItem}
                >
                  Contact
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/about"
                  className={this.state.navBarItem}
                >
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
