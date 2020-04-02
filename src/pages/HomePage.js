import React, { Component, Fragment } from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Cources from "../components/Cources/Cources";
import Videos from "../components/Videos/Videos";
import ClientReview from "../components/ClientRewiew/ClientReview";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Home" />
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProjects />
        <Cources />
        <Videos />
        <ClientReview />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
