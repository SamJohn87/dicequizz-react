import { Routes, Route } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { initialState } from './features/playersState';
import { listReducer } from "./features/playersState";
import { gameContext } from './features/playersState';
import { Container, Row, Col } from 'reactstrap';
import Footer from './components/Footer';
import GameObjective from './pages/GameObjective';
import GameBoard from './pages/GameBoard';
import './App.css';

function App() {
  const [gameState, dispatch] = useReducer(listReducer, initialState);

  useEffect(() => {
    const request = `https://the-trivia-api.com/v2/questions?categories=general_knowledge&difficulties=easy&limit=10`;
    const fetchData = async () => {
      const response = await fetch(request);

      if (!response.ok) {
        return Promise.reject(`Unable to fetch, status: ${response.status}`);
      }

      const results = await response.json();

      setTimeout(() => {
        dispatch({
          type: 'SET_GAME',
          payload: results.filter((result) => !result.question.text.toLowerCase().includes("which"))
        });
      }, 1000);
    };

    fetchData().catch((error) => {
      dispatch({
        type: 'ERR_MSG',
        payload: error.toString()
      });
    });
  }, []);

  if (gameState.isLoading) {
    return <h1>loading...</h1>;
  }

  if (gameState.errMsg) {
    return (
      <div>
        <h1>whoopsie!: that was a bad request</h1>
        <p>{gameState.errMsg}</p>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path='/' element={<GameObjective />} />
            <Route path='/gameboard' element={
              <gameContext.Provider value={[gameState, dispatch]}>
                <GameBoard />
              </gameContext.Provider>} />
          </Routes>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
