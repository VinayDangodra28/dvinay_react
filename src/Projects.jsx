import React from 'react';
import ReactDOM from 'react-dom/client';
import Preloader from './Preloader';
import Header from './Header';
import Contact from './Contact';
import Body from './Body';
import Project_body from './Project_body';
function Projects() {
  return (
    
    <React.StrictMode>
      <Header />
      <Project_body />
      <Contact />
    </React.StrictMode>
  );
}

export default Projects;
