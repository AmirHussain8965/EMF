import React from 'react';
import { Container } from 'react-bootstrap';
import Icon1 from '../../img/icon1.svg'
import './Balance.css';

const Balance = () => {
    return (
        <section className="balance_section">
            <Container>
                <div className="balance_text1_main">
                    <div className="balance_text1_div">
                        <h2>TURNED & BALANCE</h2>
                        <p>Producing sites that are custom tailored to your audience, showing consumers the content they need in a format that makes sense. We deliver elegant and easily navigated websites providing the user with a stress free, low pressure experience. Comfortable navigation and ease of use in the goal. We take all the guesswork out of the site structure and deliver a conversion-oriented site tailored to your goals.</p>
                    </div>
                </div>
            </Container>
            <div className="balance_text2_main">
                <Container>
                    <div className="balance_text2_inner">
                        <p>Every Problem can have multiple solutions. To see them you have to look at the big picture overall. Don’t limit yourself to just one route.</p>
                        <img src={Icon1} alt="..." />
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Balance