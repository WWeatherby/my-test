import React from 'react';
import './App.css';
import { useState } from 'react';
import Email from './email';
import SayHello from './sayHello';
import { palidrome } from './testing';

function App() {
  const [email, setEmail] = useState<string>('');
  
  return (
    <div className="App">
      <Email email={email} setEmail={setEmail} />
      <SayHello email={email} />
      {palidrome('llama')}
    </div>
  );
}

export default App;
