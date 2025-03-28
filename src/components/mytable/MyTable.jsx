import React, { useState } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import Table1 from "../../components/img/table1.svg";
import Table2 from "../../components/img/table2.svg";
import './MyTable.css';
import { Link } from 'react-router-dom';

// Sample data for the table
const tableData = [
    { id: '1001-3', dateTime: '13/07/22 - 2:34PM', status: 'Closed', ticketName: 'John Doe' },
    { id: '1001-2', dateTime: '13/07/22 - 2:34PM', status: 'Available', ticketName: 'John Doe' },
    { id: '1001-4', dateTime: '13/07/22 - 2:34PM', status: 'Closed', ticketName: 'John Doe' },
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
            <div className="mytable_main">
                <Table bordered>
                    <thead>
                        <tr>
                            <th>
                                <div className="mytable_head_main">
                                    <p>ID</p>
                                    <div className="mytable_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="mytable_head_main">
                                    <p>Date & Time</p>
                                    <div className="mytable_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="mytable_head_main">
                                    <p>Status</p>
                                    <div className="mytable_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="mytable_head_main">
                                    <p>Ticket Name</p>
                                    <div className="mytable_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="mytable_head_main">
                                    <p>Action</p>
                                    <div className="mytable_head_icons">
                                        <img src={Table1} alt="..." />
                                        <img src={Table2} alt="..." />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.dateTime}</td>
                                <td>{row.status}</td>
                                <td>{row.ticketName}</td>
                                <td>
                                    <span onClick={handleOpen}>View</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal */}
            <Modal
                size="lg"
                dialogClassName="mytable_modal_main"
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="mytable_modal_inner">
                        <h5>Message sent</h5>
                        <h6>We will be in contact with you shortly.</h6>
                        <p>
                        Didn’t receive the email?{' '}
                            <Link style={{ color: '#007bff', textDecoration: 'underline' }}>
                                [Resend Message]
                            </Link>
                        </p>
                        <Button variant="primary" onClick={handleClose}>
                            Ok
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MyTable;