import React from "react";
import './StandardUserSteps.css';
import { Row, Col } from 'react-bootstrap';
import UploadInput from "../upload_input/UploadInput";
import UploadImage from "../uploadimage/UploadImage";

const Step5 = () => {
    return (
        <div>
            <section className='StandardUserSteps_section'>
                <div className="sus_title">
                    <h3 className='step5_txt'>Add Inventory</h3>
                </div>
                <div className="StandardUserSteps_inputs_main">
                    <h4 className="steps_subtitle">Upload Data</h4>
                    <Row className="upload_main_row">
                        <Col className="pe-5" xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <h6>Use an existing market database to import information</h6>
                                <UploadInput />
                            </div>
                        </Col>
                        <p className="or_txt">OR</p>
                        <Col className="ps-5" xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <h6>Upload your custom data via an Excel file</h6>
                                <UploadInput />
                            </div>
                        </Col>
                    </Row>
                    <h4 className="steps_subtitle">Add Details Manually <span>(Optional)</span></h4>
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Product Name*</label>
                                <input type="text" placeholder="Cardeals" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Product Description*</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Price*</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>SKU/ID</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Stock Quantity</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>color options</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={12}>
                            <UploadImage />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="step5_check_box">
                                <input type="checkbox" id="SiteMapping" name="SiteMapping" />
                                <label htmlFor="SiteMapping">Site Mapping</label>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="step5_check_box">
                                <input type="checkbox" id="SSlCert" name="SSlCert" />
                                <label htmlFor="SSlCert">SSl Cert</label>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
}

export default Step5;
