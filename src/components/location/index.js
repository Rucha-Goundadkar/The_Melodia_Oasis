import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2136359031892!2d72.8345733!3d18.921935699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73993eebd%3A0x9e8c8bfbd74a913a!2sGateway%20of%20India%2C%20Apollo%20Bandar%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra%20400001%2C%20India!5e0!3m2!1sen!2sus!4v1691941176085!5m2!1sen!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                title="gglemaps" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

        </div>
    )
}

export default Location;