import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function LibraryProject({ project, handleDelete, handleLoad }) {

    const srcDoc = (`
    <html>
        <body>${project.html}</body>
        <style>${project.css}</style>
        <script defer>${project.js}</script>
    </html>
    `)
  
    return (
    <div className="project-card">
        <Card style={{ width: '18rem' }}>
        <Card.Header style={{ textAlign: "center"}}>
            <iframe 
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                width="50%"
                height="50%"
                style={{border: "none"}}
            />
        </Card.Header>
        <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{project.author}</Card.Subtitle>
        <div style={{position: "relative", left: "25%"}}className="project-buttons">
            <Link to="/">
                <Button variant="primary" onClick={() => handleLoad(project)}>Load</Button>
            </Link>
            <Button variant="danger" onClick={() => handleDelete(project)}>Delete</Button>
        </div>
        </Card.Body>
    </Card>
    </div>
  )
}