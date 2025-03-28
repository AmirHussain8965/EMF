import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoLogoYoutube } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";



const Footer = () => {
    return (
        <footer className='footer_section'>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <div className="footer_inner1">
                            <h3>LOGO</h3>
                            <p>Enim nec vel non volutpat nisl. Sodales ante sit nunc in. Odio viverra convallis mauris pellentesque ante cras risus ac. Eleifend nascetur nam hac proin eu convallis. Tempus dui tortor mus pulvinar et. Nunc sapien netus tincidunt etiam. Laoreet dolor in duis tempor lorem et aliquet proin. Laoreet diam pellentesque euismod quam vestibulum eu volutpat duis. Nisl egestas posuere at feugiat viverra aliquet mus ultricies amet.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <div className="footer_inner2">
                            <h5>Explore</h5>
                            <ul>
                                <li><Link>Inventory</Link></li>
                                <li><Link>Finance</Link></li>
                                <li><Link>Contact us</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                        <div className="footer_inner2">
                            <h5>Contact Information</h5>
                            <ul>
                                <li><Link>123-456-7890</Link></li>
                                <li><Link>New York, USA</Link></li>
                                <li><Link>Company@gmail.com</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                        <div className="footer_inner4">
                            <h3>Subscribe to our News letter </h3>
                            <p>Get offers and support right from your inbox</p>
                            <h5>Stay in the Loop</h5>
                            <div className="footer_inner4_input">
                                <input type="text" placeholder="Enter your email" />
                                <button>Subscribe</button>
                            </div>
                            <h6>By signing up, I agree with data protection policy.</h6>
                            <ul>
                                <li><Link><IoLogoYoutube /></Link></li>
                                <li><Link><FiInstagram /></Link></li>
                                <li><Link><AiFillFacebook /></Link></li>
                                <li><Link><IoLogoTwitter /></Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer