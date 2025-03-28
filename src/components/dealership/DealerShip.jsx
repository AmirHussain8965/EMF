import React from 'react'
import { Container } from 'react-bootstrap';
import './DealerShip.css';

const DealerShip = () => {
  return (
    <>
        <section className="dealership_section">
            <Container>
                <div className='dealership_text_div'>
                <h2>Welcome to <span>[dealership name]</span></h2>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                </div>
            </Container>
        </section>
    </>
  )
}

export default DealerShip