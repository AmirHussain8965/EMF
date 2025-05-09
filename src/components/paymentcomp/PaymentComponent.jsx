import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./PaymentComponent.css";
import Visa from "../../components/img/Visa.svg";
import Mastercard from "../../components/img/Mastercard.svg";
import PayPal from "../../components/img/PayPal.svg";
import GooglePay from "../../components/img/GooglePay.svg";
import ApplePay from "../../components/img/ApplePay.svg";
import Temp1 from "../../components/img/temp1.svg";
import UploadInput from "../upload_input/UploadInput";

const PaymentComponent = () => {
    const [selectedPayment, setSelectedPayment] = useState("card");

    return (
        <div className="payment-container">
            <Row>
            <Col xs={12} md={6} xl={6}>
                    <div className="order-summary">
                        <h5>Order Summary</h5>
                        <div className="order-item">
                            <div>
                                <img src={Temp1} alt="Template" />
                                <p>Remorts - Car Dealership Website Template</p>
                            </div>
                            <span>$800.00</span>
                        </div>
                        <div className="payment_addons_text">
                        <h6>Add-Ons</h6>
                        <ul>
                            <li><span>UI/UX Design Enhancements</span> <span>$200.00</span></li>
                            <li><span>SEO Optimization </span><span>$200.00</span></li>
                            <li><span>Membership System</span> <span>$200.00</span></li>
                        </ul>
                        </div>
                        <div className="discount">
                            <input type="text" placeholder="Gift or discount codes" />
                            <Button variant="primary">Apply</Button>
                        </div>
                        <div className="summary-total">
                            <p><span>Subtotal: </span><span>$1,000.00</span></p>
                            <p><span>Shipping:</span> <span>$7.24</span></p>
                            <h5>Total: <span>$1,724.00</span></h5>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="payment-methods">
                        <h5>Payment Methods</h5>
                        <div className="payment-icons">
                            <div className="payment_icons_inner">
                                <img src={Visa} alt="Visa" />
                            </div>
                            <div className="payment_icons_inner">
                                <img src={Mastercard} alt="Mastercard" />
                            </div>
                            <div className="payment_icons_inner">
                                <img src={PayPal} alt="PayPal" />
                            </div>
                            <div className="payment_icons_inner">
                                <img src={GooglePay} alt="Google Pay" />
                            </div>
                            <div className="payment_icons_inner">
                                <img src={ApplePay} alt="Apple Pay" />
                            </div>
                        </div>
                        <h5>Payment Details</h5>

                        <div className="payment_details_main">
                            <h6>Pay With:</h6>
                            <div className="payment-options">
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={selectedPayment === "card"}
                                        onChange={() => setSelectedPayment("card")}
                                    />
                                    Card
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bank"
                                        onChange={() => setSelectedPayment("bank")}
                                    />
                                    Bank
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="transfer"
                                        onChange={() => setSelectedPayment("transfer")}
                                    />
                                    Transfer
                                </label>
                            </div>
                            {/* Card Details Form */}
                            {selectedPayment === "card" && (
                                <Form className="payment_form_main">
                                    <Form.Group className="payment_form_inner">
                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control type="text" placeholder="1234 5678 9101 1213" />
                                    </Form.Group>
                                    <Row  className="align-items-end">
                                        <Col>
                                            <Form.Group className="payment_form_inner">
                                                <Form.Label>Expiration Date</Form.Label>
                                                <Form.Control type="text" placeholder="MM/YY" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="payment_form_inner">
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control type="text" placeholder="123" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="terms">
                                        <Form.Check type="checkbox" label="I acknowledge and agree to the Terms & Conditions" />
                                    </Form.Group>
                                    {/* <div className="payment_form_last">
                                        <div className="steps_input_div">
                                            <label className="payment_last_label">Add Your E-signature</label>
                                            <UploadInput />
                                        </div>
                                    </div> */}
                                </Form>
                            )}

                            <Button className="pay-button">Pay $1,000.00</Button>
                            <p className="payment_last_text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                        </div>


                    </div>
                </Col>
                
            </Row>
        </div>
    );
};

export default PaymentComponent;
