import React, { useState } from "react"
import '../styles/App.css';
import Main from './Main';
import Library from './Library'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [selected, setSelected] = useState("")

  const handleLoad = (project) => {
    fetch(`http://localhost:8800/projects/${project.project_id}`)
    .then(r => r.json())
    .then(setSelected)
  }
  


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main selected={selected} setSelected={setSelected}/>}/>
          <Route path="/library" element={<Library handleLoad={handleLoad}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
