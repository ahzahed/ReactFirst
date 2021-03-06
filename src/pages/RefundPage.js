import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Refund from "../components/Refund/Refund";
import Footer from "../components/Footer/Footer";
class RefundPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund Policy" />
        <PageTop pagetitle="Refund Policy" />
        <Refund />
        <Footer />
      </Fragment>
    );
  }
}

export default RefundPage;
