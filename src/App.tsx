import React from 'react';
import './App.css';
import MyButton from './components/Button';
import Form from './components/Form';

import {CounterProvider} from './provider/Counter';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <MyButton onClick={()=>alert("Button Clicked")} text='Click ME'/>
      </CounterProvider>
      {/* <Form/> */}
    </div>
  );
}

export default App;
