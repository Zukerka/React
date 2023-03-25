import './App.css';
import React, { useState, createContext } from 'react';
import Layout from './components/Layout';

export const countContext = createContext(null);

const App = () => {

  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount
  }
  return (
    <countContext.Provider value={value}>
      <div className='app'> App
        <Layout />
      </div>
    </countContext.Provider>
  );
}

export default App;
