// PaymentForm.jsx
import React, { useState } from 'react';
import './PaymentForm.css'; 
import { Row, Col } from 'react-bootstrap';

const PaymentForm = () => {
    const [paymentMethod, setPaymentMethod] = useState('card'); // Default to 'card'

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <div className="paymentform_main">
            {/* Payment Method Selection */}
            <div className="payment-method-selection">
                <label className="payment-method-label">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => handlePaymentMethodChange('card')}
                        className="payment-method-radio"
                    />
                    <span className={`payment-method-text ${paymentMethod === 'card' ? 'active' : ''}`}>
                        CARD
                    </span>
                </label>
                <label className="payment-method-label">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="ach"
                        checked={paymentMethod === 'ach'}
                        onChange={() => handlePaymentMethodChange('ach')}
                        className="payment-method-radio"
                    />
                    <span className={`payment-method-text ${paymentMethod === 'ach' ? 'active' : ''}`}>
                        ACH
                    </span>
                </label>
            </div>

            {/* Card Details Form (Shown when 'Card' is selected) */}
            {paymentMethod === 'card' && (
                <div className="mytable2_inputs_main">
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div className="theinputs_inner">
                                <label htmlFor="">Card</label>
                                <input type="number" placeholder='**** **** **** 4534'/>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className="theinputs_inner">
                                <label htmlFor="">Exp.</label>
                                <input type="text" placeholder='12/24' />
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className="theinputs_inner">
                                <label htmlFor="">CC ID</label>
                                <input type="text" placeholder='***' />
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                            <div className="theinputs_inner">
                                <label htmlFor="">Zip code</label>
                                <input type="number" placeholder='123456' />
                            </div>
                        </Col>
                    </Row>
                </div>
            )}

            {/* ACH Details Form (Placeholder for when 'ACH' is selected) */}
            {paymentMethod === 'ach' && (
                <div className="mytable2_inputs_main"> 
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div className="theinputs_inner">
                                <label htmlFor="">Account</label>
                                <input type="number" placeholder='**** **** **** 4534'/>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                            <div className="theinputs_inner">
                                <label htmlFor="">Routing</label>
                                <input type="number" placeholder='123456789' />
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;