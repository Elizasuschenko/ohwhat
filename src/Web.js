import React from 'react';
import FirstBolck from "./component/first_block/first_block";
import Process from "./component/process/process";
import Get from "./component/get/get";
import AboutUs from "./component/about_us/about_us";
import Services from "./component/services/services";
import OurWorks from "./component/our_works/our_works";
import Footer from "./component/footer/footer";

class Web extends React.Component{
    render(){
        return(
            <div>
            <FirstBolck />
            <Process />
            <Get />
            <AboutUs />
            <Services />
            <OurWorks />
            <Footer />
            </div>
        )
    }
}
export default Web