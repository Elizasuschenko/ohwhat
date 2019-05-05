import React from 'react';
import './style.scss'
import Feedback from "../feedback";

class Process extends React.Component{
    render(){
        return(
            <section id="process">
                <div className="container">
            <Feedback />
            <span>СТРАТЕГИЯ ОХВАТ РЕЗУЛЬТАТ ВОВЛЕЧЕНИЕ КОММУНИКАЦИЯ</span>
                    <div className="process_content">
                        <div className="process_content_left">
                            <div className="process_content_left_item left">
                                <h3>01.</h3>
                                <p>Мы создаём <br />позиционирование<br /> вашего бренда и<br /> <span>стратегию продвижения <br />в социальных сетях.</span></p>
                            </div>
                            <div className="process_content_left_item right">
                                <h3>02.</h3>
                                <p>Ваши страницы <br />станут площадкой<br /> для близкой и<br /> <span>эффективной коммуникации <br />с клиентами. </span></p>
                            </div>
                        </div>
                        <div className="process_content_right">Мы сделаем так,<br /> чтобы вашим <br /> брендом<br /> восхищались.</div>
                    </div>
                </div>
            </section>
    )
    }
}
export default Process