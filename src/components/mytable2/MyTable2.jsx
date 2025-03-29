import React, { useState } from 'react';
import { Table, Modal, Button, Row, Col } from 'react-bootstrap';
import Table1 from "../../components/img/table1.svg";
import Table2 from "../../components/img/table2.svg";
import Eye from "../../components/img/eye.svg";
import Edit from "../../components/img/edit.svg";
import './MyTable2.css';

// Sample data for the table (updated to match the image)
const tableData = [
    { active: true, name: 'Doe John', accessLevel: 'Manager' },
    { active: false, name: 'Doe John', accessLevel: 'Standard' },
    { active: true, name: 'Doe John', accessLevel: 'Manager' },
    { active: true, name: 'Doe John', accessLevel: 'Manager' },
    { active: false, name: 'Doe John', accessLevel: 'Standard' },
    { active: false, name: 'Doe John', accessLevel: 'Manager' },
    { active: true, name: 'Doe John', accessLevel: 'Standard' },
    { active: false, name: 'Doe John', accessLevel: 'Standard' },
];

const MyTable = () => {
    // State to control modal visibility
    const [show, setShow] = useState(false);

    // Functions to handle modal open/close
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <div>
            {/* Table */}
            <div className="mytable2_main">
                <Table bordered>
                    <thead>
                        <tr>
                            <th>
                                <div className="mytable2_head_main">
                                    <p>Active</p>
                                    <div className="mytable2_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="mytable2_head_main">
                                    <p>Name</p>
                                    <div className="mytable2_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="mytable2_head_main">
                                    <p>Access level</p>
                                    <div className="mytable2_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="mytable2_head_main">
                                    <p>Action</p>
                                    <div className="mytable2_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={row.active}
                                        readOnly
                                    />
                                </td>
                                <td>{row.name}</td>
                                <td>{row.accessLevel}</td>
                                <td>
                                    <div className="mytable2_btns">
                                        <Button onClick={handleOpen}><img src={Eye} alt="" /> View</Button>
                                        <Button className='Edit_btn'><img src={Edit} alt="" /> Edit</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal */}
            <Modal
                size="lg"
                dialogClassName="mytable2_modal_main"
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
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
        </div>
    );
};

export default MyTable;