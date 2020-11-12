import React from 'react';

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/SingleCourse";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Error from "./pages/Error";
import './css/App.css';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pages/about" component={About} />
        <Route path="/pages/courses" component={Courses} />
        <Route path="/pages/courses/:slug" component={SingleCourse} />
        <Route path="/pages/blog" component={Blog} />
        <Route path="/pages/gallery" component={Gallery} />
        <Route path="/pages/donate" component={Donate} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
