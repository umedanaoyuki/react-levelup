import './App.css';
import React, { useState } from 'react';
import { ChildArea } from './ChildArea';


function App() {

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = () => {
    setOpen(false); 
  };
    
  
  return (
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}

export default App;
