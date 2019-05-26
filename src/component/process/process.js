import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class Process extends React.Component {
    constructor(props) {
        super(props)
        this.psevdo = this.psevdo.bind(this)
    }

    psevdo(elem, atr, content) {
        document.addEventListener('DOMContentLoaded', function () {
            let str = document.querySelector(elem);
            str.setAttribute(atr, content)
            console.log(str)
        }, false)
    }

    render() {
        return (
            <section className="process_block" id="process">
                <div className="process_container container"
                     psevdo={this.psevdo('.process_container', 'data-before', '018')}>
                    <Feedback/>
                    <span>{this.props.content.line}</span>
                    <div className="process_content" psevdo={this.psevdo('.process_content', 'data-before', 'OHWHAT')}>

                        <div className="process_content_left">
                            <div className="process_content_left_item left">
                                <h3 className="process_content_left_item_title">{this.props.content.left.one.number}</h3>
                                <p className="process_content_left_item_text">{this.props.content.left.one.content.text}<span
                                    className="process_content_left_item_text_bold">{this.props.content.left.one.content.boldText}</span>
                                </p>
                            </div>
                            <div className="process_content_left_item right">
                                <h3 className="process_content_left_item_title">{this.props.content.left.two.number}</h3>
                                <p className="process_content_left_item_text">{this.props.content.left.two.content.text}
                                    <span
                                        className="process_content_left_item_text_bold">{this.props.content.left.two.content.boldText} </span>
                                </p>
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