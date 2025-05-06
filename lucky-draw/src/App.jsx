import { useState } from 'react';
import './App.css';
import Lottery from './lottery.jsx'; 

function App() {

  return (
    <Lottery n={4} isWinning={15}/>
  );
}

export default App;
