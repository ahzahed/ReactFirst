import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AllCources from '../components/AllCources/AllCources';
import Footer from '../components/Footer/Footer';

class CoursePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course"/>
                <PageTop pagetitle="Cources" />
                <AllCources />
                <Footer />
            </Fragment>
        );
    }
}

export default CoursePage;