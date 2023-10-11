import React, { useState } from "react"
import '../styles/App.css';
import Main from './Main'


function App() {
  const [selected, setSelected] = useState("")

  return (
    <div>
      <Main
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
