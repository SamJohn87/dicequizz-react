import { useContext } from 'react';
import { gameContext } from './playersState';
import { Row, Col } from 'reactstrap';

const Answer = () => {
    const [gameState, dispatch] = useContext(gameContext);
    //use state from context to get the id of the user currently playing
    //player object isPlaying property is true
    const isPlaying = gameState.listPlayers.find((player) => player.isPlaying === true).id;
    const nextPlayerId = isPlaying + 1;

    function nextPlayer() {
        dispatch({
            type: 'RESET_GAME'
        });

        if (nextPlayerId < gameState.listPlayers.length) {
            dispatch({
                type: 'IS_PLAYING',
                payload: nextPlayerId
            });
        } else {
            dispatch({
                type: 'IS_PLAYING',
                payload: 0
            });
        }
    }

    function addPoints() {
        dispatch({
            type: 'ADD_POINTS',
            payload: isPlaying
        });

        nextPlayer();
    }

    return (
        <Row>
            <Col>
                <Row>
                    <Col className='pt-5'>
                        <button className='btn-custom fs-5 text-white fw-bold' onClick={addPoints}>Right, and On Time</button>{' '}
                        <button className='btn-custom fs-5 text-white fw-bold' onClick={nextPlayer}>Whoops!</button>
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-5 mx-3 border border border-success p-2 text-success fst-italic fw-bold w-75'>
                        Answer: {gameState.trivia[gameState.questionIdx].correctAnswer}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Answer;