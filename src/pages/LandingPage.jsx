import React from 'react'
import Hero from '../components/LandingPageComponents/hero/Hero';
import Header from '../components/LandingPageComponents/header/Header';
import Balance from '../components/LandingPageComponents/balance/Balance';
import PDS from '../components/LandingPageComponents/pds/PDS';
import Contact from '../components/LandingPageComponents/contact/Contact';
import Map from '../components/LandingPageComponents/map/Map';
import Works from '../components/LandingPageComponents/works/Works';
import "../components/LandingPageComponents/LandingPage.css"

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Balance />
            <PDS />
            <Works/>
            <Contact />
            <Map />
        </>
    )
}

export default LandingPage;