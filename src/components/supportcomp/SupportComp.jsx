import React from 'react';
import "./SupportComp.css";
import MyTable from '../mytable/MyTable';
import { Button, Col, Row } from 'react-bootstrap'; 
import Search from "../../components/img/search.svg"; 


const SupportComp = () => {
    return (
        <>
            <div className="support_comp_main">
                <div className="top_title">
                    <h3>Support - Submit A Ticket</h3>
                </div>
                <div className="support_comp_inputs_main">
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="support_comp_inputs_div">
                                <label>Name</label>
                                <input type="text" placeholder="Name" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="support_comp_inputs_div">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={12}>
                            <div className="support_comp_inputs_div">
                                <label>How May We Help You?</label>
                                <input type="text" placeholder="Your Message" />
                            </div>
                        </Col>
                    </Row>
                    <div className="last_right pt-5">
                        <Button type='button'>Submit</Button>
                    </div>
                </div>
                <div className="top_title">
                    <h3>Support Tickets</h3>
                </div>
                
                <div className="search_input_main">
                    <input type="text" placeholder='Search by name'/>
                    <img src={Search} alt="P" />
                </div>

                <MyTable />
            </div>
        </>
    )
}

export default SupportComp