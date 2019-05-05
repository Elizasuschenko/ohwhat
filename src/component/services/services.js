import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class Services extends React.Component{
    render(){
        return(
            <section id="services">
                <div className="container">
            <span>СТРАТЕГИЯ ОХВАТ РЕЗУЛЬТАТ ВОВЛЕЧЕНИЕ КОММУНИКАЦИЯ</span>
                    <Feedback />
                    <h2>Услуги</h2>
                    <div className="services">
                        <div className="services_item"><span>01</span>
                            <div className="services_item_content">
                                <h3>Продвижение</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button>Заказать</button>
                            </div>
                        </div>
                        <div className="services_item"><span>02</span>
                            <div className="services_item_content">
                                <h3>Пакет «Старт»</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button>Заказать</button>
                            </div>
                        </div>

                        <div className="services_item"><span>03</span>
                            <div className="services_item_content">
                                <h3>Продвижение</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button>Заказать </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
    }
}
export default Services