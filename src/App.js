import React from 'react';

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/SingleCourse";
import Error from "./pages/Error";
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/courses" component={Courses} />
        <Route path="/courses/:slug" component={SingleCourse} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
