import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

axios.defaults.baseURL = 'http://localhost/api';

ReactDOM.render(<App/>, document.getElementById('root'));
