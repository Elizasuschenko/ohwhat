import React from 'react';
import './style.scss'

class Services extends React.Component{
    constructor(props){
        super(props)
        this.servicesBlock = this.servicesBlock.bind(this)
        this.call = this.call.bind(this)
        this.showDarkLine = this.showDarkLine.bind(this)
    }
    showDarkLine(){
        let dark = document.querySelector('.windows');
        dark.classList.add('showDark')
    }
    call() {
        let call = document.querySelector('.call_block');
        call.style.display="block";
        this.showDarkLine()
    }
    servicesBlock(index){
        const items = this.props.content.items;
        return (
            <React.Fragment>  {items.map((item) => (
                <div className="services_item"><span className="services_item_number">{item.number}</span>
                    <div className="services_item_content">
                        <h3 className="services_item_title">{item.title}</h3>
                        <p className="services_item_text">{item.content}</p>
                        <span className="price"> {item.price}</span>
                        <button className="order" onClick={this.call}>{this.props.content.sell}</button>
                    </div>
                </div>
                )
            )
            } </React.Fragment>)

    }
    render(){
        return(
            <section className="services_block" id="#services">
                <div className="services_container container">
            <span>{this.props.content.line}</span>
                    <h2 className="services_title">{this.props.content.title}</h2>
                    <div className="services">
                        {this.servicesBlock()}
                    </div>
                </div>
            </section>
    )
    }
}
export default Services