import React,{ useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';

const Discount = () => {
    const end = 40;
    const [start,setStart] = useState(0);

    const porcentage = () => {
        if(start < end){
            setStart(prevCount => prevCount+1)
        }   
    }

    useEffect(()=>{
        if( start > 0 && start < 40){
            setTimeout(()=>{
                setStart(prevCount => prevCount+1)
            },32)
        }
    },[start])
    

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                 
                <Fade
                    onVisibilityChange={ (inView) => {
                        if(inView){
                            porcentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>  
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase ticket before 25th October</h3>
                        <p>
                        Hurry and take advantage of this limited-time offer ! Purchase your discounted tickets today and mark your calendar for an extraordinary musical experience. We can't wait to share the stage with you !
                        </p>

                        <MyButton
                            text="Purchase tickets"
                            link="http://google.com"
                            size="small"
                            style={{
                                background:'#ffa800',
                                color:'#ffffff'
                            }} 
                            iconTicket={true}
                        />                 
                    </div>

                </Slide>

            </div>
        </div>
    )
}

export default Discount