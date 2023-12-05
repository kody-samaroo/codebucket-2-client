import React, { useState, useEffect } from 'react';
import '../styles/Library.css';
import LibraryProject from './LibraryProject';

export default function Library() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8800/projects')
        .then(r => r.json())
        .then(setProjects)
    }, [])

  return (
    <div>
      <div className="library-container">
        <div className="library-header">LIBRARY</div>
      </div>
        <div className="library-cards">
          {projects.map((project,index) => {
            return (
            <div className="library-card" key={index}>
              <LibraryProject
                project={project}
              />
            </div>
            );
          })};
        </div>
      </div>
  )
}
