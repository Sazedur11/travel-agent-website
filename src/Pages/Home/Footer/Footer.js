import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="col-md-4">
                <h5>Travel Agent</h5>
                <p>Safe your Tour Plan</p>
            </div>
            <div className="col-md-4">
                <h3>Contact us</h3>
                <p>mail: exmaple@gmail.com</p>
                <p>phone: +254125475</p>
            </div>
            <div className="col-md-4">
                <h5>Book Now</h5>
                <button>Book Now</button>
            </div>
        </div>
    );
};

export default Footer;