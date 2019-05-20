import React from 'react';
import './style.scss'
import Feedback from "../feedback";


class Get extends React.Component{
    render(){
        return(
            <section className="get_block" id="get">
                <div className="get_container container">
                    <span>{this.props.content.line}</span>
                    <Feedback />
                    <div className="get-image">

                    </div>
                    <div className="get-text">
                        <h2 className="get_text_title">{this.props.content.title}</h2>
                        <div className="get_text_left">
                            <span>{this.props.content.items[0]}</span>
                            <span>{this.props.content.items[1]}</span>
                            <span>{this.props.content.items[2]}</span>
                        </div>
                        <div className="get_text_right">
                            <span>{this.props.content.items[3]}</span>
                            <span>{this.props.content.items[4]}</span>
                            <span>{this.props.content.items[5]}</span>
                        </div>
                    </div>
                </div>
            </section>

    )
    }
}
export default Get