import { React, useState } from 'react';
import "./BillingCom.css";
import { Modal, Button } from 'react-bootstrap';
import PaymentForm from '../paymentform/PaymentForm';
import Eye from "../../components/img/eye.svg";
import Edit from "../../components/img/edit.svg";

const BillingCom = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const paymentMethods = [
        { id: 1, type: 'Card Details', number: '**** **** **** 4554', status: 'Active' },
        { id: 2, type: 'Card Details', number: '**** **** **** 4536', status: 'Make Active' },
        { id: 3, type: 'Bank Details', number: '**** 5352', status: 'Make Active' },
    ];

    const [activeMethod, setActiveMethod] = useState(paymentMethods[0].id);

    const handleMakeActive = (id) => {
        setActiveMethod(id);
    };
    
    return (
        <>
            <div className="Billing_main">
                <div className="last_right between">
                    <h5>Payment methods</h5>
                    <Button onClick={handleShow}><i class="bi bi-plus-lg"></i> Add</Button>
                </div>
                <div className="Billing_inner">
                    <div className="payment-methods-table-container">
                        <table className="payment-methods-table">
                            <tbody>
                                {paymentMethods.map((method) => (
                                    <tr key={method.id} className="payment-methods-row">
                                        <td className="payment-methods-cell">{method.type}</td>
                                        <td className="payment-methods-cell">{method.number}</td>
                                        <td className="payment-methods-cell">
                                            {method.status === 'Active' ? (
                                                <span className="status-active">{method.status}</span>
                                            ) : (
                                                <button
                                                    className="make-active-button"
                                                    onClick={() => handleMakeActive(method.id)}
                                                >
                                                    {method.status}
                                                </button>
                                            )}
                                        </td>
                                        <td>
                                            <div className="mytable2_btns" style={{justifyContent:"center"}}>
                                                <Button onClick={handleShow}><img src={Eye} alt="" /> View</Button>
                                                <Button className='Edit_btn'><img src={Edit} alt="" /> Edit</Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Modal component */}
            <Modal size="lg" dialogClassName='mytable2_modal_main' show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="mytable2_modal_inner">
                        <h5> Add payment method</h5>
                        <PaymentForm />
                        <div className="last_three_buttons">
                            <Button>Delete</Button>
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

export default BillingCom;