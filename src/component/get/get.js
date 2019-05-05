import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class Get extends React.Component{
    render(){
        return(
            <section id="get">
                <div class="container">
                    <span>СТРАТЕГИЯ ОХВАТ РЕЗУЛЬТАТ ВОВЛЕЧЕНИЕ КОММУНИКАЦИЯ</span>
                    <Feedback />
                    <div class="get-image">

                    </div>
                    <div class="get-text">
                        <h2>Вы получаете:</h2>
                        <div class="get_text_left">
                            <span>Дополнительный канал продаж</span>
                            <span>Точечную коммуникацию</span>
                            <span>Возможность познакомить клиентов с ценностями и идеями вашего бренда</span>
                        </div>
                        <div class="get_text_right">
                            <span>Решения, которые влияют и запоминаются</span>
                            <span>Узнаваемость</span>
                            <span>Постоянный контакт с клиентами</span>
                        </div>
                    </div>
                </div>
            </section>
    )
    }
}
export default Get