import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact" className="conatc-container">
            <h2>Contact Us</h2>
            <Form className="conact-form">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="email" placeholder="enter Your Email" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control placeholder="Type Your Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="type your Message" rows={4} />
                </Form.Group>
                <button className="contact-btn">Submit</button>
            </Form>
        </div>
    );
};

export default Contact;