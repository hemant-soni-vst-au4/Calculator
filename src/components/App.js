import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const result = calculate(state, buttonName);
    setState(result);
  };

  const { total, next } = state;
  return (
    <>
      <div className="app">
        <Display result={(next === null ? total : next) || undefined} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
