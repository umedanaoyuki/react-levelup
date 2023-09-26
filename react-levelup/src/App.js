import './App.css';
import React, { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';
import CssModules from './components/CssModules';


function App() {

  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}

export default App;
