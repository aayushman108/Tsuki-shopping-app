import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);

