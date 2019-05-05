import React from 'react';
import './style.scss'

class OurWorks extends React.Component{
    render(){
        return(
            <section id="our_works">
                <div className="container">
                    <h2>Наши работы</h2>
                    <div className="works">
                        <div className="item_works"><img src="" /></div>
                        <div className="item_works"><img src="" /></div>
                        <div className="item_works"><img src="" /></div>
                        <div className="item_works"><img src="" /></div>
                        <div className="item_works"><img src="" /></div>
                    </div>
                    <div className="works_button">
                        <button>Посмотреть больше</button>
                    </div>
                </div>
            </section>
    )
    }
}
export default OurWorks