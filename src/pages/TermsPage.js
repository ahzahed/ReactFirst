import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Terms from "../components/Terms/Terms";
class TermsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms and Condition" />
        <PageTop pagetitle="Terms and condition" />
        <Terms />
        <Footer />
      </Fragment>
    );
  }
}

export default TermsPage;
