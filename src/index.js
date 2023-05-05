import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Preloader from './Preloader';
import Header from './Header';
import Contact from './Contact';
import Body from './Body';
import Projects from "./Projects";
import Project_body from './Project_body';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project_page from './Project_page';
import Project_1 from './Project_1';
import './css/preloader.css';
import './css/style.css';
import './css/responsive.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/*' element={<Body />} />
          <Route path='/projects' element={<Project_body />} />
          <Route path='/projects/:id' element={<Project_page />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
