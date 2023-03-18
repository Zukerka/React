import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Title from './components/Title';

const App = () => {
  const [count, setCount] = useState(0); 
  
  const increaseCount = () => {setCount(count + 1) };
  const decreaseCount = () => { setCount(count - 1) };
  
  return (
    <div>

      <Title name = {count} />

      <Button onClick={increaseCount} text="Increase" />
      <Button onClick={decreaseCount} text="Decrease" />
      <Card />
      
    </div>
  );
}

export default App;
