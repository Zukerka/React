import './App.css';
import React, { useState } from 'react';
import Button from './Button';
import Title from './Title';

const App = () => {
  const [count, setCount] = useState(0); 
  
  const increaseCount = () => {setCount(count + 1) };
  const decreaseCount = () => { setCount(count - 1) };
  
  return (
    <div>

      <Title name = {count} />

      <Button onClick={increaseCount} text="Increase" />
      <Button onClick={decreaseCount} text="Decrease" />
      
    </div>
  );
}

export default App;
