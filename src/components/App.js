import React, { useState } from "react"
import '../styles/App.css';
import Main from './Main';
import Library from './Library'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [selected, setSelected] = useState("")

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main selected={selected} setSelected={setSelected}/>}/>
          <Route path="/library" element={<Library/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
