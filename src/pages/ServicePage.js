import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Contact from '../components/Contact/Contact';
import Services from '../components/Services/Services';

class ServicePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service"/>
                <PageTop pagetitle="My Services" />
                <Services />
                <Contact />
            </Fragment>
        );
    }
}

export default ServicePage;