import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services'
export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="SOLAR LEARNING ENTREPRENEURSHIP &amp; VOCATIONAL TRAINING">
                    <Link to="/about" className="btn-primary">
                        Learn more
                    </Link>
                </Banner>
            </Hero>
            <Services/>
        </>
    );
}

