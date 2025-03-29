import { React, useState } from 'react';
import "./ManUserCom.css";
import MyTableTwo from '../mytable2/MyTable2';
import { Modal, Button, Row, Col } from 'react-bootstrap';

const ManUserCom = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="ManUserCom_main">
                <div className="last_right">
                    <Button onClick={handleShow}><i class="bi bi-plus-lg"></i> Add Users</Button>
                </div>
                <div className="ManUserCom_inner">
                    <div className="ManUserCom_table_div">
                        <MyTableTwo />
                    </div>
                </div>
            </div>
            {/* Modal component */}
            <Modal size="lg" dialogClassName='mytable2_modal_main' show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>

                </Modal.Header>

                <Modal.Body>
                    <div className="mytable2_modal_inner">
                        <h5>User Information </h5>
                        <div className="mytable2_inputs_main">
                            <Row>
                                <Col xs={12} md={6} lg={6}>
                                    <div className="theinputs_inner">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <div className="theinputs_inner">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={12}>
                                    <div className="theinputs_inner">
                                        <label htmlFor="">Access Level</label>
                                        <select name="" className='form-select'>
                                            <option value="">Select Access Level</option>
                                            <option value="">Manager</option>
                                            <option value="">Standard User</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={12}>
                                    <div className="theinputs_inner">
                                        <label htmlFor="">Email</label>
                                        <input type="email" name="" id="" />
                                    </div>
                                </Col>
                            </Row>
                            <div className="check_box_active">
                                <input type="checkbox" name="Active_checkbox" id="Active_checkbox" />
                                <label htmlFor="Active_checkbox">Active</label>
                            </div>
                        </div>
                        <div className="last_three_buttons">
                            <Button>Send password reset link</Button>
                            <div className="last_three_buttons_inner">
                            <Button onClick={handleClose}>Save</Button>
                            <Button onClick={handleClose} className='last3_active'>Cancel</Button>
                            </div>
                        </div>
                        
                    </div>
                </Modal.Body>
            </Modal>
        </>


    )
}

export default ManUserCom;