import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import MealDB from './containers/MealDB';



ReactDOM.render(<MealDB className="root-style"/>, document.getElementById('root'));

