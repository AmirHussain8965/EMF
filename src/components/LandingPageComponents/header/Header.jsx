import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <section className="header_section">
            <Container>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Logo</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link">contact us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" >webinar portal</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link">support</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/SetupWebsite">dealer login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Container>
        </section>
    )
}

export default Header