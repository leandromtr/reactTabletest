import React from 'react';
import './bootstrap.min.css'
import './App.css'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <br/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img  src={require('./images/placeholder-logo.png')} style={{backgroundColor: "#fff"}} alt="logo" />        
      </div>  

      <br/>
      <center>
        <h1>Gestão da Frota</h1>
        {/* <p>Select the book written by the author shown</p> */}
      </center>

    </div>
  );
}

export default App;