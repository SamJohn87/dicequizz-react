import { useContext, useEffect } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { gameContext } from '../features/gameState';
import { useSpring, animated } from '@react-spring/web';
import PlayerNameForm from '../features/PlayerNameForm';
import PlayersList from '../features/PlayersList';
import Dice from '../features/Dice';
import CuteLoading from '../components/Loading';
import readyImg from '../assets/images/shutterstock_2350330561.png';

const GameBoard = () => {
    const [gameState, dispatch] = useContext(gameContext);

    const readyBtnAnimation = useSpring({
        from: { translateX: '-2000px', rotate: '360deg' },
        to: { translateX: '0px', rotate: '0deg' },
        config: { duration: 2000},
        delay: 1000
    });

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
                    payload: results.filter((result) => !result.question.text.toLowerCase().includes('which'))
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
            <Container>
                <Row className='bg-white rounded rounded-4 m-5 p-5'>
                    <Col className='d-flex justify-content-center col-12'>
                        <CuteLoading type={'spinningBubbles'} color={'#4F3180'} />
                    </Col>
                    <Col className='fs-1 mt-5 d-flex justify-content-center' style={{ color: '#4F3180' }}>
                        Loading
                    </Col>
                </Row>
            </Container>
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
        <Container fluid>
            <Row style={{ height: '600px' }}>
                <Col sm={3}>
                    <PlayersList />
                </Col>
                <Col sm={9} >
                    <Row >
                        <Col className='fw-bold text-white fs-1 p-3 text-center col-12'>
                            DiceQuizz Trivia
                        </Col>
                        <Col className='bg-white rounded text-center me-3'>
                            <Row>
                                <Col sm={12}>
                                    {!gameState.gameStarted &&
                                        <PlayerNameForm />
                                    }

                                    {gameState.gameStarted
                                        && <Dice />
                                    }
                                </Col>
                                {!gameState.gameStarted &&
                                    <Col className='d-flex flex-row-reverse me-5'>
                                        <animated.div style={readyBtnAnimation}>
                                            <img
                                                src={readyImg}
                                                width='100px'
                                                alt='Ready To Play'
                                                onClick={startGame}
                                            />
                                        </animated.div>
                                    </Col>
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default GameBoard;