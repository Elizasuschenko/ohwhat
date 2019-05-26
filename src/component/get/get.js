import React from 'react';
import './style.scss'
import Feedback from "../feedback";


class Get extends React.Component {
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
            <section className="get_block" id="get">
                <div className="get_container container"
                     before={this.psevdo('.get_container', 'data-before', 'Oh what')}
                     after={this.psevdo('.get_container', 'data-after', 'охват')}>
                    <span>{this.props.content.line}</span>
                    <Feedback/>
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