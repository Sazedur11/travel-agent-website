import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();


    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://ghastly-demon-70793.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h2>Booking ID: {serviceId}</h2>
            <h2>Booking Name: {service.name}</h2>
            <h3>Price: ${service.price}</h3>
        </div>
    );
};

export default Booking;