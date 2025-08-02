import React from 'react';
import './App.css';
import MyButton from './components/Button';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <MyButton onClick={()=>alert("Button Clicked")} text='Click ME'/>
      {/* <MyButton text='Click ME Again'/> */}
      <Form/>
    </div>
  );
}

export default App;
