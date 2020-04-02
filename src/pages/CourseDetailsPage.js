import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import CourceDetails from "../components/CourceDetails/CourceDetails";

class CourseDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Course details" />
        <CourceDetails />
        <Footer />
      </Fragment>
    );
  }
}

export default CourseDetailsPage;
