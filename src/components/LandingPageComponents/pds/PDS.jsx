import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ZenBook from '../../img/ZenBook.svg'
import './PDS.css';

const PDS = () => {
    return (
        <section className="pds_section">
            <Container>
                <Row style={{ alignItems: "center" }}>
                    <Col lg={6} md={12} sm={12}>
                        <div className="pds_sec_text_div">
                            <h2>Why Choose PDS?</h2>
                            <p>PDS is your all-in-one dealership management system—designed to streamline operations, boost productivity, and enhance the customer journey.</p>
                            <p>Easily manage inventory, track leads, and automate routine tasks with a clean, user-friendly interface.</p>
                            <p>Get real-time insights, integrate with tools like Google Analytics, and keep your team and customers connected—anytime, anywhere.</p>
                            <p>Whether you're scaling up or just getting started, PDS helps you work smarter, not harder.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="pds_sec_img_div">
                            <img src={ZenBook} alt="..." />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PDS