import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/Main/MainContent';
import Navbar from './components/Navbar/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <MainContent />
  </React.StrictMode>,
  document.getElementById('root')
);
