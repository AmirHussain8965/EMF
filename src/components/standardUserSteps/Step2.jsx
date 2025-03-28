import React from "react";
import './StandardUserSteps.css';
import { Col, Row } from 'react-bootstrap';
import search from "../../components/img/search.svg"; 
import { Link } from "react-router-dom";



const Step2 = () => {

    return (
        <div>
            <section className='StandardUserSteps_section'>  
                <div className="sus_title">
                    <h3 className='step2_txt'>Set Up Your Domain</h3>
                </div>
                <div className="StandardUserSteps_inputs_main">
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Use Existing Domain</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Search for a New Domain </label>
                                <input type="text" placeholder="" />
                                <img src={search} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Domain Verification</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Subdomain Option</label>
                                <input type="text" placeholder="" />
                                <p>Don’t have a domain? <Link>Create a subdomain</Link> using our platform (e.g., dealershipname.platform.com).</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Step2