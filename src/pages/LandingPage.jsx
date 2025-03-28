import React from 'react';
import HeaderTwo from '../components/navbartwo/HeaderTwo';
import Hero from '../components/hero/Hero';
import DealerShip from '../components/dealership/DealerShip';
import OurTeam from '../components/ourteam/OurTeam';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
  return (
    <>
        <HeaderTwo />
        <Hero />
        <DealerShip />
        <OurTeam />
        <Footer />
    </>
  )
}

export default LandingPage