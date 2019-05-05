import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class FirstBolck extends React.Component{
    render(){
        return(
            <section id="main">
            <div className="container">
            <Feedback />
            <span>СТРАТЕГИЯ ОХВАТ РЕЗУЛЬТАТ ВОВЛЕЧЕНИЕ КОММУНИКАЦИЯ</span>
            <div className="fidback">
            </div>
            <div className="main_content">
            <h1 className="main_title"> OH WHAT <br /> ОХВАТ</h1>
        <h2 className="main_title_bottom">АГЕНТСТВО <br /> ЭФФЕКТИВНОГО <br /> ПРОДВИЖЕНИЯ В <br /> СОЦИАЛЬНЫХ СЕТЯХ </h2>
        </div>
        <div className="main_image">

            </div>
            </div>
            </section>
    )
    }
}
export default FirstBolck