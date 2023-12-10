import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Library.css';
import LibraryProject from './LibraryProject';
import Button from 'react-bootstrap/esm/Button';

export default function Library({ handleLoad }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8800/projects')
        .then(r => r.json())
        .then(setProjects)
    }, [])

    const handleDelete = (deleteProject) => {
      fetch(`http://localhost:8800/projects/${deleteProject.project_id}`, {
          method: 'DELETE',
      })
      .then(setProjects(projects.filter((project) => project.project_id !== deleteProject.project_id)))
    }

  return (
    <div>
      <div className="library-container">
        <div className="library-header">LIBRARY</div>

        <div className="main-buttons">
            <Link to="/">
                <Button variant="light" className="main-button">
                    Back to editor
                </Button>
            </Link>
        </div>
      </div>
        <div className="library-cards">
          {projects.map((project,index) => {
            return (
            <div className="library-card" key={index}>
              <LibraryProject
                project={project}
                handleDelete={handleDelete}
                handleLoad={handleLoad}
              />
            </div>
            );
          })};
        </div>
      </div>
  )
}
