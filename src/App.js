import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { initialState } from './features/gameState';
import { listReducer } from "./features/gameState";
import { gameContext } from './features/gameState';
import Footer from './components/Footer';
import GameObjective from './pages/GameObjective';
import GameBoard from './pages/GameBoard';
import GameSelection from './pages/GameSelection';
import Score from './pages/Score';
import Credits from './pages/Credits';
import './App.css';

function App() {
  const [gameState, dispatch] = useReducer(listReducer, initialState);

  return (
    <>
      <gameContext.Provider value={[gameState, dispatch]}>
        <Routes>
          <Route path='/' element={<GameObjective />} />
          <Route path='/gameselection' element={<GameSelection />} />
          <Route path='/gameboard' element={<GameBoard />} />
          <Route path='/score' element={<Score />} />
          <Route path='/credits' element={<Credits />} />
        </Routes>
      </gameContext.Provider>
      <Footer />
    </>
  );
}

export default App;
