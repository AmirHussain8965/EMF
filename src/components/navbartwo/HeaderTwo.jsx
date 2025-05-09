import React from 'react';
import './HeaderTwo.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


const HeaderTwo = () => {
    return (
        <section className="HeaderTwo_section">
            <Container>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mx-auto my-2 my-lg-0 gap-4" navbarScroll>
                                {/* <Nav><Link href="#action0">Home</Link></Nav> */}
                                {/* <NavDropdown title="Financing" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Financing</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Something
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                                <Nav.Link href="#action0">HOME</Nav.Link>
                                <Nav.Link href="#action1">DEALER WEBSITES</Nav.Link>
                                <Nav.Link href="#action2">WEBINAR PORTAL</Nav.Link>
                            </Nav>
                            <Form className="header2_btns">
                                <Button type='button'>CONTACT US</Button>
                                <Button type='button' className='h2_btn_active'>SUPPORT</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </section>
    );
}

export default HeaderTwo