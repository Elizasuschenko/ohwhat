import React from 'react';
import {data} from "./data.json";
import FirstBolck from "./component/first_block/first_block";
import Process from "./component/process/process";
import Get from "./component/get/get";
import AboutUs from "./component/about_us/about_us";
import Services from "./component/services/services";
import OurWorks from "./component/our_works/our_works";
import Footer from "./component/footer/footer";
import Window from "./component/window/window";

class Web extends React.Component {

    render() {
        return (
            <div>
                <Window content={data.blocks}/>
                <FirstBolck content={data.blocks.firstBlock} />
                <Process  content={data.blocks.process} />
                <Get  content={data.blocks.get} />
                <AboutUs  content={data.blocks.aboutUs} />
                <OurWorks  content={data.blocks.ourWorks} />
                <Services  content={data.blocks.services} />
                <Footer  content={data.blocks.footer} />
            </div>
        )
    }
}

export default Web