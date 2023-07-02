import logo from './logo.svg';
import './App.css';
import './UseStateCounter';
import UseStateCounter from './UseStateCounter';
import UseEffectDemo from './UseEffectDemo'
import {ThemeProvider} from './ThemeContext'
import {CompWithTheme} from './CompWithTheme'
import {CompWithThemeBrother} from './CompWithThemeBrother'
import {ReducerDemo} from './ReducerDemo';
import React, {useState} from "react"
import useLogger from './useLogger';
import useLocalStorage from './useLocalStorage';

function App() {

  const [name, setName]  = useLocalStorage('name', '')

  useLogger(name);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={name} 
          onChange={e => setName(e.target.value)} />
        <UseStateCounter />
        <UseEffectDemo />
        <ThemeProvider>
          <div>
            <CompWithTheme />
            <CompWithThemeBrother />
          </div>
        </ThemeProvider>
        <ReducerDemo />
      </header>
    </div>
  );
}

export default App;
