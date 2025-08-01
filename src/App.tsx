import React from 'react';
import './App.css';
import MyButton from './components/Button';

function App() {
  return (
    <div className="App">
      <MyButton onClick={()=>alert("Button Clicked")} text='Click ME'/>
      <MyButton text='Click ME Again'/>
    </div>
  );
}

export default App;
