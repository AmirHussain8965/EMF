import React from 'react';
import { Container } from 'react-bootstrap';
import './Map.css';

const Map = () => {
    return (
        <section className="map_section">
            <Container>
                <div className="map_title">
                    <h1>Find Us on the <span>Map</span></h1>
                </div>
                <div className="map_main_div">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247802.4053277045!2d-0.4312482282383567!3d51.52860700671648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e1!3m2!1sen!2s!4v1745923977868!5m2!1sen!2s"
                        style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map of Dealership Location"/>

                </div>
            </Container>
        </section>
    )
}

export default Map