import React from "react";
import './StandardUserSteps.css';
import { Col, Row } from 'react-bootstrap';
import RichEditor from "../richeditor/RichEditor";
// import ep_upload from "../../components/img/ep_upload.svg";
import { Link } from "react-router-dom";
import UploadInput from "../upload_input/UploadInput";



const Step1 = () => {

    return (
        <div>
            <section className='StandardUserSteps_section'>
                <div className="sus_title">
                    <h3 className='step1_txt'>Provide Business Information</h3>
                </div>
                <div className="StandardUserSteps_inputs_main">
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Business Name*</label>
                                <input type="text" placeholder="Cardeals" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Business Tagline</label>
                                <input type="text" placeholder="Your comfort matters to us" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Business Logo*</label>
                                <UploadInput/>
                                <p>Don’t have a logo? <Link>Contact us</Link> to get a customized logo </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Operating Hours</label>
                                <input type="text" placeholder="9:00 am - 6:00 pm " />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Phone Number*</label>
                                <input type="text" placeholder="123-456-7890" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Email Address*</label>
                                <input type="text" placeholder="cardeals@gmail.com" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={12}>
                            <div className="steps_input_div">
                                <label>Address*</label>
                                <input type="text" placeholder="Newyork, United states" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={12}>
                            <div>
                                <RichEditor/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Step1