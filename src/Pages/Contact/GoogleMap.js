import React from 'react';

const GoogleMap = () => {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7010474824833!2d91.41680671476168!3d23.034746384946914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375369a473f947b9%3A0xb0b2ceeeaa739178!2sFeni%20Computer%20Institute%20Mosque!5e0!3m2!1sen!2sbd!4v1675557570112!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default GoogleMap;