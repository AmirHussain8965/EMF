import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (

        <section className="cotact_section">
            <Container>
                <div className="cotact_title">
                    <h1>Contact <span>Our Team</span> for Assistance </h1>
                </div>
                <Row style={{ alignItems: "center" }}>
                    <Col lg={6} md={12} sm={12}>
                        <div className="contact_card1_body">
                            <h3>Get in Touch</h3>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="contact_input_div">
                                        <label htmlFor="">Name</label>
                                        <input type="text" placeholder='John' />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="contact_input_div">
                                        <label htmlFor="">Surname</label>
                                        <input type="text" placeholder='Doe' />
                                    </div>
                                </Col>
                            </Row>
                            <div className="contact_input_div">
                                <label htmlFor="">Mail</label>
                                <input type="text" placeholder='johndoe@mail.net' />
                            </div>
                            <div className="contact_input_div">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='Capitol, WA' />
                            </div>
                            <div className="contact_input_div">
                                <label htmlFor="">Description</label>
                                <textarea rows="5"></textarea>
                            </div>
                            <div className="contact_last_btns">
                                <button type='button'>Send Message</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="contact_card2_body">
                            <div className="contact_card2_inner">
                                <h3>Contact Us</h3>
                                <div className="contact_card2_txt">
                                    <h6>Email</h6>
                                    <p>info@companyname.com</p>
                                </div>
                                <div className="contact_card2_txt">
                                    <h6>Phone</h6>
                                    <p>+1 123-456-7890</p>
                                </div>
                                <div className="contact_card2_txt">
                                    <h6>Address</h6>
                                    <p>123 Main Street, City, State, Country</p>
                                </div>
                                <div className="contact_last_btns mt-5">
                                    <button type='button'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact