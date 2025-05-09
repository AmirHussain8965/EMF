import React, { useState } from "react";
import './StandardUserSteps.css';
import { Button } from 'react-bootstrap';
import PaymentComponent from "../paymentcomp/PaymentComponent";

const Step3 = () => {
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    return (
        <div>
            <section className='StandardUserSteps_section'>
                <div className="sus_title">
                    <h3 className='step3_txt'>Complete Payment</h3>
                </div>

                {/* Pricing Section (Hidden After Payment) */}
                {!paymentCompleted && (
                    <div className="step6_content1_main">
                        <div className="step6_content1_inner">
                            <div className="step6_content1_inner_title">
                                <h5>1. Base Price of the Template</h5>
                                <p>$300.00</p>
                            </div>
                        </div>
                        <div className="step6_content1_inner">
                            <div className="step6_content1_inner_title">
                                <h5>2. Customizations Total</h5>
                                <p>$600.00</p>
                            </div>
                            <ul>
                                <li><span>UI/UX Design Enhancements:</span> <span>$200.00</span></li>
                                <li><span>SEO Optimization:</span> <span>$200.00</span></li>
                                <li><span>Membership System:</span> <span>$200.00</span></li>
                            </ul>
                        </div>
                        <div className="step6_content1_inner">
                            <div className="step6_content1_inner_title">
                                <h5>3. Inventory Fee</h5>
                                <p>$30.00</p>
                            </div>
                        </div>
                        <div className="step6_content1_inner">
                            <div className="step6_content1_inner_title">
                                <h5>4. Tax</h5>
                                <p>$70.00</p>
                            </div>
                        </div>
                        <div className="step6_content1_totals">
                            <h5>TOTAL</h5>
                            <h5>$1,000.00</h5>
                        </div>
                    </div>
                )}

                {/* Payment Method Section (Shown After Clicking Button) */}
                {paymentCompleted && (
                     <PaymentComponent />
                )}

                {/* Complete Payment Button (Hidden After Clicking) */}
                {!paymentCompleted && (
                    <div className="complete_payment_btn">
                        <Button onClick={() => setPaymentCompleted(true)}>Let's GO</Button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Step3;
