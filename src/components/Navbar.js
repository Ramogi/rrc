import React, { Component } from 'react'

import logo from '../images/logo3.svg';
import {GiHamburgerMenu} from 'react-icons/gi';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
          <nav className="navbar">
            <div className="nav-center">
              <div className="nav-header">
                <Link to="/">
                  <img src={logo} alt="Ramogi Resource Centre" />
                </Link>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={this.handleToggle}
                >
                  <GiHamburgerMenu className="nav-icon" />
                </button>
              </div>
              <ul
                className={
                  this.state.isOpen ? "nav-links show-nav" : "nav-links"
                }
              >
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/About">ABOUT</Link>
                </li>
                <li>
                  <Link to="/Courses">COURSES</Link>
                </li>
                <li>
                  <Link to="/">GALLERY</Link>
                </li>
                <li>
                  <Link to="/">BLOG</Link>
                </li>
                <li>
                  <Link to="/">DONATE</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}
