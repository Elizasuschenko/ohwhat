import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class Process extends React.Component{
    render(){
        return(
            <section className="process_block" id="process">
                <div className="process_container container">
            <Feedback />
            <span>{this.props.content.line}</span>
                    <div className="process_content">
                        <div className="process_content_left">
                            <div className="process_content_left_item left">
                                <h3 className="process_content_left_item_title">{this.props.content.left.one.number}</h3>
                                <p className="process_content_left_item_text">{this.props.content.left.one.content.text}<span className="process_content_left_item_text_bold">{this.props.content.left.one.content.boldText}</span></p>
                            </div>
                            <div className="process_content_left_item right">
                                <h3 className="process_content_left_item_title">{this.props.content.left.two.number}</h3>
                                <p className="process_content_left_item_text">{this.props.content.left.two.content.text} <span className="process_content_left_item_text_bold">{this.props.content.left.two.content.boldText} </span></p>
                            </div>
                        </div>
                        <div className="process_content_right">{this.props.content.right.text}</div>
                    </div>
                </div>
            </section>
    )
    }
}
export default Process