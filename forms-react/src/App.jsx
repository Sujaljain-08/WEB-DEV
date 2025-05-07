import { useState } from 'react';
import './App.css'

function App() {
  const [stateObject, setStateObject] = useState({ userName: '' });

  function changeHandler(event) {
    setStateObject(prev => ({
      ...prev, 
      [event.target.name]: event.target.value 
    }));
  }

  return (
    <form>
      <label htmlFor="userName">Username:</label>
      <input
        type="text"
        name="userName"             
        id="userName"
        value={stateObject.userName} 
        onChange={changeHandler}
      />
    </form>
  );
}

export default App;
