import React from 'react';
import "./Hero.css";
import { Container } from 'react-bootstrap';

const Hero = () => {
    return (
        <>

            <section className="hero_section">
                <div className="hero_overlay">
                    <Container>
                        <div className="hero_content">
                            <h2>Launch Your Dealership’s Website in Just 10 Minutes!</h2>
                            <p>Build and launch your dealership website with ease</p>
                            <button className="hero_btn">See our inventory</button>
                        </div>
                    </Container>
                </div>
            </section>

        </>
    )
}

export default Hero