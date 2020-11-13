import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Courses from '../components/Courses'
import FeaturedCourses from '../components/FeaturedCourses'
export default function Home() {
    return (
      <>
        <Hero />
        <Banner
          title="SOLAR LEARNING"
          subtitle="ENTREPRENEURSHIP"
          slug="&amp; VOCATIONAL TRAINING"
        >
          <Link to="/pages/about" className="btn-primary">
            Learn more &gt;&gt;
          </Link>
        </Banner>
        <Courses />
      </>
    );
}

