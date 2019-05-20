import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class OurWorks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boolean: true
        }
        this.number = this.number.bind(this)
        this.add_block = this.add_block.bind(this)
        this.works = this.works.bind(this)
    }
    works(){
        const items = this.props.content.items;
        return (
            <React.Fragment>  {items.map((item) => (
                <div className={item.classBlock}><img alt="img" className="item_works_img" src={item.srcImg} /></div>
                )
            )
            } </React.Fragment>)

    }
    add_block() {
        let second_line = document.getElementsByClassName('second-line');
        let third_line = document.getElementsByClassName('third-line');
        for (let i = 0; i < second_line.length; i++) {
            second_line[i].classList.add('show')
        }
        for (let i = 0; i < third_line.length; i++) {
            third_line[i].classList.add('show')
        }
        let button = document.getElementsByClassName('works_button_click');
        button[0].style.display = 'none'
    }
    number() {
        let boolem = this.state.boolean;
        if (boolem === true) {
            let elem = document.getElementsByClassName('number_companies');
            let box = elem[0].getBoundingClientRect();
            let body = document.body;
            let docElem = document.documentElement;
            let scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
            let clientTop = docElem.clientTop || body.clientTop || 0;
            let top = box.top + scrollTop - clientTop;
            let scrolled = window.pageYOffset;
            let sum = top - docElem.clientHeight;
            if (scrolled >= sum && scrolled <= top) {
                this.setState(function (state) {
                    return {
                        boolean: false
                    }
                });
                if (elem[0].innerHTML < 50) {
                    setTimeout(function go() {
                        elem[0].innerHTML = +elem[0].innerHTML + 1;
                        if (elem[0].innerHTML < 50) setTimeout(go, 50);

                        return elem[0].innerHTML
                    }, 20);
                }

            }
            return false
        }
    }

    render() {
        window.onscroll = this.number;
        return (
            <section className="our_works_block" id="works">
                <div className="our_works_cotainer container">
                    <Feedback/>
                    <h2 className="our_works_title">{this.props.content.title} </h2>
                    <h3 className="our_works_title_companies">Нам доверяют более <span
                        className="number_companies">0</span> организаций</h3>
                    <div className="works">
                        {this.works()}
                    </div>
                    <div className="works_button">
                        <button onClick={this.add_block} className="works_button_click">Посмотреть больше</button>
                    </div>
                </div>
            </section>

        )
    }
}

export default OurWorks