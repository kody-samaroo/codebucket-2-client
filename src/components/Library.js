import React, { useState, useEffect } from 'react'

export default function Library() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8800/projects')
        .then(r => r.json())
        .then(setProjects)
    }, [])

    console.log(projects);

  return (
    <div>Library</div>
  )
}
