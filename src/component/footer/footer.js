import React from 'react';
import './style.scss'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.socialBlock = this.socialBlock.bind(this)
        this.psevdo = this.psevdo.bind(this)
        this.call = this.call.bind(this)
        this.showDarkLine = this.showDarkLine.bind(this)
    }

    socialBlock(index) {
        const items = this.props.content.social;
        return (
            <React.Fragment>  {items.map((item) => (
                    <a className="footer_link" href={item.href}>
                        <i className={item.faClass} aria-hidden="true"></i>
                    </a>
                )
            )
            } </React.Fragment>)

    }

    psevdo(elem, atr, content) {
        document.addEventListener('DOMContentLoaded', function () {
            let str = document.querySelector(elem);
            str.setAttribute(atr, content)
            console.log(str)
        }, false)
    }

    showDarkLine() {
        let dark = document.querySelector('.windows');
        dark.classList.add('showDark')
    }

    call() {
        let call = document.querySelector('.call_block');
        call.style.display = "block";
        this.showDarkLine()
    }

    render() {

        return (

            <footer>
                <div className="footer_container container"
                     before={this.psevdo('.footer_container', 'data-before', 'Oh what')}
                     after={this.psevdo('.footer_container', 'data-after', 'охват')}>
                    <h2 className="main_title_footer">{this.props.content.title}</h2>
                    <button className="footer_button" onClick={this.call}>{this.props.content.button}</button>
                    <div className="social">
                        {this.socialBlock()}
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer