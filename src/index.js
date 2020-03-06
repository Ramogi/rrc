import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {CourseProvider} from './context'
ReactDOM.render(
  <CourseProvider>
    <Router>
      <App />
    </Router>
  </CourseProvider>,
  document.getElementById("root")
);


