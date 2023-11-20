import { useContext } from "react";
import { Col, Row, Container } from "reactstrap";
import { gameContext } from "../features/playersState";
import PlayerNameForm from "../features/PlayerNameForm";
import PlayersList from "../features/PlayersList";
import Dice from "../features/Dice";

const GameBoard = () => {
    const [gameState, dispatch] = useContext(gameContext);
    
    function startGame() {
        if (gameState.listPlayers.length < 2) {
            alert('You need at least 2 players to start the game!');
        } else {
            dispatch({
                type: 'IS_PLAYING',
                payload: 0
            });

            dispatch({
                type: 'START_GAME'
            });
        }
    }

    return (
        <Container fluid className='game-board'>
            <Row>
                <Col sm={3}>
                    <PlayersList />
                </Col>
                <Col sm={9}>
                    <Row >
                        <Col className='fw-bold text-white m-4 fs-1 text-center'>
                            DiceQuizz Trivia
                        </Col>
                    </Row>
                    <Row>
                        <Col className='trivia-block bg-white rounded-4 m-2 p-4 text-center'>
                            <Row>
                                <Col className="p-4">
                                    {!gameState.gameStarted &&
                                        <PlayerNameForm />
                                    }

                                    {gameState.gameStarted
                                        && <Dice />
                                    }
                                </Col>
                            </Row>
                            {!gameState.gameStarted &&
                                <Row>
                                    <Col>
                                        <button onClick={startGame} className='btn-custom fs-5 text-white fw-bold'>Ready</button>
                                    </Col>
                                </Row>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default GameBoard;