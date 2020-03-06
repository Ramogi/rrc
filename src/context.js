import React, { Component } from 'react'

const CourseContext = React.createContext();



class CourseProvider extends Component {
    render() {
        return <CourseContext.Provider value = {"Hello"}>
            {this.props.children}
        </CourseContext.Provider>
    }
}

const CourseConsumer = CourseContext.Consumer;

export{CourseProvider, CourseConsumer, CourseContext};