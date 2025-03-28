// OurTeam.js
import React from 'react';
import './OurTeam.css'; // Import the CSS file
import { Col, Container, Row } from 'react-bootstrap';

const OurTeam = () => {
    return (
        <section className="OurTeam_section">
            <Container>
                <Row style={{alignItems:"center"}}>
                    <Col xs={12} md={6} lg={6}>
                        <div className="form_container">
                            <h2>Get in Touch</h2>
                            <form className="form_inner_main">
                                <Row>
                                    <Col xs={12} md={6} lg={6}>
                                        <div className="form_input_div">
                                            <label htmlFor="">Name</label>
                                            <input type="text" placeholder="John" />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}>
                                        <div className="form_input_div">
                                            <label htmlFor="">Surname</label>
                                            <input type="text" placeholder="Doe" />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="form_input_div">
                                    <label htmlFor="">Mail</label>
                                    <input type="email" placeholder="johndoe@mail.net" />
                                </div>
                                <div className="form_input_div">
                                    <label htmlFor="">Address</label>
                                    <input type="text" placeholder="Capitol, WA" />
                                </div>
                                <div className="form_input_div">
                                    <label htmlFor="">Description</label>
                                    <textarea name="" id="" cols="" rows="4"></textarea>
                                </div>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>

                        <div className="contact_info_main">
                            <h2>Contact Us</h2>
                            <div className="contact_text">
                                <strong>Email</strong>
                                <p>info@companyname.com</p>
                            </div>
                            <div className="contact_text">
                                <strong>Phone</strong>
                                <p>+1 123-456-7890</p>
                            </div>
                            <div className="contact_text">
                                <strong>Address</strong>
                                <p>123 Main Street, City, State, Country</p>
                            </div>
                            <button type="submit">Send Message</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurTeam;