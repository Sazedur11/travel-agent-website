import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/zHzP6BY/s-m-ibrahim-1-NEJki-TTu-LU-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Safe travel for you family</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/mHNsM9p/adam-kool-nd-N00-Kmb-J1c-unsplash.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Safe travel for your friends </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/wysMS4c/bruno-abatti-m-Ef-Ih-OTH27w-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>World tour travel agent</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;