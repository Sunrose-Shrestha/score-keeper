import React, { useEffect, useState } from 'react';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  let isGameOver = false;
  const gameSize = 11;

  const increment1 = () => {
    if(!isGameOver) {
      setCount1(count1 + 1);
      if(count1+1 === gameSize) {
        isGameOver = true;
        alert('Player 1 wins!');
        reset();
      }
    }
  };

  const increment2 = () => {
    if(!isGameOver) {
      setCount2(count2 + 1);
      if(count2+1 === gameSize) {
        isGameOver = true;
        alert('Player 2 wins!');
        reset();
      }
    }
  };

  const reset = () => {
    setCount1(0);
    setCount2(0);
  };

  useEffect(() => {
    document.title = `Player 1: ${count1} | Player 2: ${count2}`;
  });

  
  return (
    <div>
      <h1>Score Keeper</h1>
      <p><strong>Player 1:</strong> |{count1}| <strong> -vs- Player 2:</strong> |{count2}|</p> 
      <button onClick={increment1}>+1 Player1</button>
      <button onClick={increment2}>+1 Player2</button>
      <button onClick={reset}>Reset Game</button>
    </div>
  );
};

export default App;
