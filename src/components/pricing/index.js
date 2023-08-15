import React from 'react';
import MyButton from '../utils/MyButton';
import {Zoom} from 'react-awesome-reveal';

const Princing = () => {
    const priceState = {
        prices:[500,1000,2500],
        position:['Balcony','Medium','Star'],
        desc:[
            'Immerse yourself in the rhythm and melodies of our musical event.',
            'Elevate your experience, and enjoy prime seating along with expedited entry !',
            'Dive into the ultimate musical extravaganza, embracing the finest seats and an exclusive backstage meet-and-greet experience.'
        ],
        linkto:['http://google.com','http://google.com','http://google.com'],
        delay:[500,0,500]   
    }

    const showBoxes = () => (
        priceState.prices.map((box,index)=>(
            <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>₹{priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            style={{
                                color:'#ffffff'
                            }} 
                            link={priceState.linkto[index]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )


    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>
            </div>
        </div> 
    )
}

export default Princing;