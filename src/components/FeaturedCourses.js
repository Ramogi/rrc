import React, { Component } from 'react'
import {CourseContext} from '../context';
export default class FeaturedCourses extends Component {
    static contextType = CourseContext
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>
                Hello from featured courses {value}
            </div>
        )
    }
}
