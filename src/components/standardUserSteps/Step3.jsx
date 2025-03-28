import React, { useState } from "react";
import './StandardUserSteps.css';
import { Row, Col, Modal } from 'react-bootstrap';
import step3_1 from "../../components/img/step3_1.svg";
import step3_2 from "../../components/img/step3_2.svg";
import step3_3 from "../../components/img/step3_3.svg";
import step3_4 from "../../components/img/step3_4.svg";
import step3_5 from "../../components/img/step3_5.svg";
import step3_6 from "../../components/img/step3_6.svg";
import Fluent from "../../components/img/Fluent.svg";
import Modal1 from "../../components/img/modal1.png";
import Modal2 from "../../components/img/modal2.png";


const Step3 = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <section className='StandardUserSteps_section'>
                <div className="sus_title">
                    <h3 className='step3_txt'>Select Your Template</h3>
                </div>
                <div className="StandardUserSteps_inputs_main">
                    <Row>
                        <Col xs={12} md={6} xl={4}>
                            <div className="SU_step3_cards_body_div">
                                <div className="SU_step3_card_img">
                                    <img src={step3_1} alt="..." />
                                </div>
                                <img src={Fluent} className="fluent_img" alt="" onClick={() => setShow(true)} />
                                <div className="SU_step3_card_txt">
                                    <h6>Remons - Car Dealership Website template</h6>

                                    <h5>$600.00</h5>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <div className="SU_step3_cards_body_div">
                                <div className="SU_step3_card_img">
                                    <img src={step3_2} alt="..." />
                                </div>
                                <img src={Fluent} className="fluent_img" alt="" />
                                <div className="SU_step3_card_txt">
                                    <h6>Remons - Car Dealership Website template</h6>
                                    <h5>$600.00</h5>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <div className="SU_step3_cards_body_div">
                                <div className="SU_step3_card_img">
                                    <img src={step3_3} alt="..." />
                                </div>
                                <img src={Fluent} className="fluent_img" alt="" />
                                <div className="SU_step3_card_txt">
                                    <h6>Remons - Car Dealership Website template</h6>
                                    <h5>$600.00</h5>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <div className="SU_step3_cards_body_div">
                                <div className="SU_step3_card_img">
                                    <img src={step3_4} alt="..." />
                                </div>
                                <img src={Fluent} className="fluent_img" alt="" />
                                <div className="SU_step3_card_txt">
                                    <h6>Remons - Car Dealership Website template</h6>
                                    <h5>$600.00</h5>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <div className="SU_step3_cards_body_div">
                                <div className="SU_step3_card_img">
                                    <img src={step3_5} alt="..." />
                                </div>
                                <img src={Fluent} className="fluent_img" alt="" />
                                <div className="SU_step3_card_txt">
                                    <h6>Remons - Car Dealership Website template</h6>
                                    <h5>$600.00</h5>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <div className="SU_step3_cards_body_div">
                                <div className="SU_step3_card_img">
                                    <img src={step3_6} alt="..." />
                                </div>
                                <img src={Fluent} className="fluent_img" alt="" />
                                <div className="SU_step3_card_txt">
                                    <h6>Remons - Car Dealership Website template</h6>
                                    <h5>$600.00</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
                dialogClassName="step3_modal">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                   <div className="step3_modal_content_main_div">
                        <div className="step3_modal_title_main">
                            <div className="step3_modal_title_txt">
                                <h5>Remons - Car Dealership Website template</h5>
                                <p>Remons – A sleek and modern car dealership website template designed for showcasing vehicle listings, attracting buyers, and streamlining the sales process effortlessly.</p>
                            </div>
                        </div>
                           <div className="step3_modal_title_img">
                               <img src={Modal1} alt="Modal1" />
                               <img src={Modal2} alt="Modal1" />
                           </div>
                   </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Step3
