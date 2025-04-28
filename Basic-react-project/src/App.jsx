import { useState } from 'react';
import './App.css';

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [count, setCount] = useState(0);

  function jabClick() {
    setCount(count + 1);
    setIsTrue(!isTrue);
  }

  return (
    <>
      <button onClick={jabClick}>
        {count} {isTrue.toString()}
      </button>
    </>
  );
}

export default App;
