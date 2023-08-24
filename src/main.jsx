import React from 'react'
import ReactDOM from 'react-dom/client'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone,faEnvelope,faCode } from '@fortawesome/free-solid-svg-icons';
import { faWordpress,faReact,faPhp,faStackOverflow,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

import App from './App.jsx'
import './index.scss'
library.add(faWordpress,faReact,faPhp,faPhone,faEnvelope,faStackOverflow,faGithub,faLinkedin,faCode);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
