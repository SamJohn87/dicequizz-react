import { useContext, useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import { gameContext } from "../features/gameState";
import PlayerNameForm from "../features/PlayerNameForm";
import PlayersList from "../features/PlayersList";
import Dice from "../features/Dice";
import CuteLoading from "../components/Loading";

const GameBoard = () => {
    const [gameState, dispatch] = useContext(gameContext);

    console.log(gameState);

    const startGame = () => {
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
    };

    useEffect(() => {
        const request = `https://the-trivia-api.com/v2/questions?categories=${gameState.category}&difficulties=easy&limit=${gameState.numQuestions}`;
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
        return (
            <div className="d-flex align-items-center justify-content-center game-board">
                <CuteLoading type={'spokes'} color={'white'} />
            </div>
        );
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