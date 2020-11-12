import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Courses from '../components/Courses'
import FeaturedCourses from '../components/FeaturedCourses'
export default function Home() {
    return (
        <>
            <Hero/>
            <Courses/>
        </>
    );
}

