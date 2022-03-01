import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Compontens/Hello'
import Hello from './Compontens/Hello';
import Welcome from './Compontens/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        <Hello age="22" name="moinuddin" address="satkania,chittaogng"></Hello>
        <Hello age="25" name="ayaj uddi"address="lohagara,chittaogng"></Hello>
        <Hello age="24" name="Jafar iqbal"address="chittagong sadar,chittaogng"></Hello>
        <Hello age="26" name="kamaluddin" address="potiya,chittaogng"></Hello>
        <Hello age="29" name="sobahan uddin"address="lohagara,chittaogng"></Hello>
        <Welcome name="class1"> </Welcome>
        <Welcome name="class2"> </Welcome>
        <Welcome name="class3"> </Welcome>
        <Welcome name="class4"> </Welcome>
      </header>
    </div>
  );
}

export default App;
