import React, { useState } from "react";
import './StandardUserSteps.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const customizationOptions = [
    { id: "customization1", label: "Custom Logo Design", price: 200, description: "Upload a custom logo or opt for a professionally designed one." },
    { id: "customization2", label: "UI/UX Design Enhancements", price: 200, description: "Get advanced adjustments for colors, layout, and more." },
    { id: "customization3", label: "SEO Optimization", price: 200, description: "Improve your site's visibility with SEO enhancements." },
    { id: "customization4", label: "Advanced Analytics Setup", price: 200, description: "Add Google Analytics tracking for better insights." },
    { id: "customization5", label: "Membership System", price: 200, description: "Allow user registrations for exclusive content or services." },
    { id: "customization6", label: "Add Mobile & Tablet Design", price: 200, description: "Ensure responsiveness across all devices." },
    { id: "customization7", label: "Performance Optimization", price: 200, description: "Optimize site speed, load times, and overall performance." },
    { id: "customization8", label: "Booking/Appointment System", price: 200, description: "For service-oriented businesses needing scheduling tools." },
];

const Step2 = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelection = (value) => {
        setSelectedOptions((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const getTotalPrice = () => {
        return selectedOptions.length * 200;
    };

    return (
        <div>
            <section className='StandardUserSteps_section'>
                <div className="sus_title">
                    <h3 className='step2_txt'>Add-Ons</h3>
                </div>
                <div className="StandardUserSteps_step4_main">
                    <Row>
                        {customizationOptions.map((item) => (
                            <Col key={item.id} xs={12} md={6} xl={6}>
                                <label
                                    htmlFor={item.id}
                                    className={`su_step4_card_body ${selectedOptions.includes(item.id) ? "active" : ""}`}
                                >
                                    <div className="su_step4_card_inner">
                                        <div className="su_step4_card_inner_radio_btn">
                                            <input
                                                type="checkbox"
                                                id={item.id}
                                                value={item.id}
                                                checked={selectedOptions.includes(item.id)}
                                                onChange={() => handleSelection(item.id)}
                                            />
                                            <label htmlFor={item.id}>{item.label}</label>
                                        </div>
                                        <h5>${item.price}.00</h5>
                                    </div>
                                    <div className="su_step4_card_inner2">
                                        <p>{item.description}</p>
                                        <Link to="#">View</Link>
                                    </div>
                                </label>
                            </Col>
                        ))}
                    </Row>

                    {/* Summary Section */}
                    <div className="summary">
                        <h4>Summary</h4>
                        <ul>
                            {selectedOptions.map((id, index) => {
                                const selectedItem = customizationOptions.find((item) => item.id === id);
                                return (
                                    <li key={id} className="summary-item">
                                        <span>{index + 1}. {selectedItem.label}</span>
                                        <span className="summary-price">${selectedItem.price}.00</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <h5 className="summary-total"><span>Total:</span> <span>${getTotalPrice()}.00</span></h5>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Step2;

