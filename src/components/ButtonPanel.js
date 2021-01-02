import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  const groups = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  return (
    <div>
      {groups.map(group => <div key="group">{group.map(element => <Button key={element} buttonName={element} />)}</div>)}

    </div>
  );
}
