import React from 'react';
import { Form } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import FormForContact from './FormForContact';


const Contact = () => {
    return (
        <div>
           <GoogleMap></GoogleMap>
           <FormForContact></FormForContact>
        </div>
    );
};

export default Contact;