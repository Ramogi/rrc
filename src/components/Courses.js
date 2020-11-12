import React, { Component } from 'react'
import Title from './Title';
import {
  FaSolarPanel,
  FaChartLine,
  FaLaptopCode,
  FaBoxes
} from "react-icons/fa";

export default class Courses extends Component {
  state = {
    courses: [
      {
        icon: <FaSolarPanel />,
        title: "Solar Training",
        info:
          "Lorem ipsum dolor sit amet, consectetur.Computers play a vital role in the modern business world, and many of even the most basic jobs involve technology and computers. Teaching participants how to use computers helps them prepare for any number of possible careers, and classes based on computer education can get even more specific. Many classes teach participants to use office suite programs, create presentations and data sheets, and learn any number of programming languages",
      },
      {
        icon: <FaLaptopCode />,
        title: "Computer Courses",
        info:
          "Lorem ipsum dolor sit amet, consectetur.Computers play a vital role in the modern business world, and many of even the most basic jobs involve technology and computers. Teaching participants how to use computers helps them prepare for any number of possible careers, and classes based on computer education can get even more specific. Many classes teach participants to use office suite programs, create presentations and data sheets, and learn any number of programming languages",
      },
      {
        icon: <FaChartLine />,
        title: "Business Training",
        info:
          "Computers play a vital role in the modern business world, and many of even the most basic jobs involve technology and computers. Teaching participants how to use computers helps them prepare for any number of possible careers, and classes based on computer education can get even more specific. Many classes teach participants to use office suite programs, create presentations and data sheets, and learn any number of programming languages.",
      },
      {
        icon: <FaBoxes />,
        title: "Community Development",
        info:
          "Lorem ipsum dolor sit amet, consectetur.Computers play a vital role in the modern business world, and many of even the most basic jobs involve technology and computers. Teaching participants how to use computers helps them prepare for any number of possible careers, and classes based on computer education can get even more specific. Many classes teach participants to use office suite programs, create presentations and data sheets, and learn any number of programming languages",
      },
    ],
  };
  render() {
    return (
      <section className="courses">
        <Title title="COURSES" />
        <div className="courses-center">
          {this.state.courses.map((item, index) => {
            return (
              <article key={index} className="course">
                <span>{item.icon}</span>
                <h2>{item.title}</h2>
                <p> {item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
