import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class AboutUs extends React.Component {
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
            <section className="about_us_block" id="about">
                <div className="about_us_container container"
                     before={this.psevdo('.about_us_container', 'data-before', 'Oh what')}
                     after={this.psevdo('.about_us_container', 'data-after', 'охват')}>
                    <span className="left_line">{this.props.content.line}</span>
                    <Feedback/>
                    <h2 className="about_us_title"> {this.props.content.titile}</h2>
                    <div className="about_us_content">
                        <div className="about_us_content_text">
                            <h3 className="about_us_content_text_title">{this.props.content.titleBlock}</h3>
                            <p className="about_us_content_text_content">{this.props.content.content}</p>
                        </div>
                        <div className="about_us_content_video">
                            <iframe title="video" width="100%" height="100%"
                                    src="https://www.youtube.com/embed/ffiJNSy8CBA" showinfo="0" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUs