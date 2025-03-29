import React from 'react';
import SudokuGrid from './components/SudokuGrid';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>Sudoku</h1>
      <SudokuGrid />
    </div>
  );
};

export default App;