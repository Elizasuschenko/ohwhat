import React from 'react';
import './style.scss'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.socialBlock = this.socialBlock.bind(this)
    }
    socialBlock(index){
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
    render() {

        return (

            <footer>
                <div className="footer_container container">
                    <h2 className="main_title_footer">{this.props.content.title}</h2>
                    <button className="footer_button">{this.props.content.button}</button>
                    <div className="social">
                        {this.socialBlock()}
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer