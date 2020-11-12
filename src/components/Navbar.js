import React, { Component } from 'react'
import logo from '../images/logo3.svg';
import {GiHamburgerMenu} from 'react-icons/gi';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
          <nav className="navbar-container">
            <div className="menu-center">
              <div className="nav-header">
                <Link to="/">
                  <img src={logo} alt="Ramogi Resource Centre logo" />
                </Link>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={this.handleToggle}
                >
                  <GiHamburgerMenu className="menu-icon" />
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
                  <Link to="/pages/About">ABOUT</Link>
                </li>
                <li>
                  <Link to="/pages/Courses">COURSES</Link>
                </li>
                <li>
                  <Link to="/pages/Gallery">GALLERY</Link>
                </li>
                <li>
                  <Link to="/pages/Blog">BLOG</Link>
                </li>
                <li>
                  <Link to="/pages/Donate">DONATE</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}
