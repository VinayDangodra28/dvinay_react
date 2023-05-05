import React from 'react';
import { useParams } from 'react-router-dom';
import Project_1 from './Project_1';

const Project_page = () => {
  const { id } = useParams();

  switch (id) {
    case '1':
      return (
        <Project_1/>
      );
    default:
        return (
          <main className='main'>
            <h2>Project not found</h2>
            <p>The project with ID {id} could not be found</p>
          </main>
        );
    }
  };
  
  export default Project_page;