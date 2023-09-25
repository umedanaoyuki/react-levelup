import './App.css';
import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count +1);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>  
      <p>{count}</p>
      <button onClick={onClickCountUp}>countUp</button>
    </div>
  );
}

export default App;
