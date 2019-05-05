import React from 'react';
import './style.scss'

class Footer extends React.Component{
    render(){
        return(
            <footer>
            <div className="container">
            <h2>Получите скидку 5%</h2>
            <h3>оставив заявку на звонок прямо сейчас</h3>
            <button>Оставить заявку на звонок</button>
            <div className="socia">
            <a href="">
            <i className="fa fa-instagram" aria-hidden="true"></i>

            </a>
            <a href="">
                <i className="fa fa-envelope-o"></i>
            </a>
            <a href="">
            <i className="fa fa-mobile-phone"></i>
            </a>
            </div>
            </div>
            </footer>
    )
    }
}
export default Footer