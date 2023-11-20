import { useContext } from 'react';
import { gameContext } from './playersState';
import { Row, Col } from 'reactstrap';

const Answer = () => {
    const [gameState, dispatch] = useContext(gameContext);

    function nextPlayer() {
        //use state from context to get the id of the user currently playing
        //player object isPlaying property is true
        const isPlaying = gameState.listPlayers.find((player) => player.isPlaying === true).id;
        const nextPlayer = isPlaying + 1;

        dispatch({
            type: 'RESET_IS_PLAYING'
        });

        if(nextPlayer < gameState.listPlayers.length) {
            dispatch({
                type: 'IS_PLAYING',
                payload: nextPlayer
            });
        } else {
            dispatch({
                type: 'IS_PLAYING',
                payload: 0
            });
        }
    }
    return (
        <Row>
            <Col>
                <Row>
                    <Col className='pt-5'>
                        <button className='btn-custom fs-5 text-white fw-bold'>Right, and On Time</button>{' '}
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