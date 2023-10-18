import React, { useState } from "react"
import '../styles/App.css';
import Main from './Main';
import Login from './Login';


function App() {
  const [selected, setSelected] = useState("")

  return (
    <div>
      <Login/>
      {/* <Main
        selected={selected}
        setSelected={setSelected}
      /> */}
    </div>
  );
}

export default App;
