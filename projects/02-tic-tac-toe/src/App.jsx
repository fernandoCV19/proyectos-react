import './App.css';
import { WinnerModal } from './components/WinnerModal';
import { Board } from './components/Board';
import { ActualPlayer } from './components/ActualPlayer';
import { useTicTacToe } from './hooks/useTicTacToe';
import React from 'react';

function App() {

  const  {resetGame, board, updateBoard, turn, winner} = useTicTacToe()

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}> Reset del juego</button>
      <Board board={board} updateBoard={updateBoard} />
      <ActualPlayer turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
