import React from 'react';
import './App.css';
import pikachu from './pngegg.png';

function App() {
  return (
    <div className='card'>
    <h1 className='titulo'>Pikachu</h1>
    <img src={pikachu} alt="pikachu" />
    <p className='descricao'>
      Pokemon raro do tipo eletrico
    </p>
    </div>
  );
}
export default App;
