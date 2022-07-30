import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieTile from './components/Movie-tile';
import MovieListDisplay from './components/Movie-list-display';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import display from './display';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  display
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
