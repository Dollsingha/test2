import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Sannati');
  return(
    <>
    <button onClick={()=> setName('Abc')}>Click</button>
    <p>{name}</p>
    </>
  );
}

export default App;
