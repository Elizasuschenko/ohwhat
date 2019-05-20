import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class FirstBolck extends React.Component{

    render(){
        return(
            <>
            <section className="main_block" id="main">
            <div className="main_container container">
            <Feedback/>
            <span>{this.props.content.line}</span>
            <div className="fidback">
            </div>
            <div className="main_content">
            <h1 className="main_title" >{this.props.content.title}</h1>
        <h2 className="main_title_bottom">{this.props.content.subtitle}</h2>
        </div>
        <div className="main_image">

            </div>
            </div>
            </section></>

    )
    }
}
export default FirstBolck