import { useContext } from 'react';
import { gameContext } from './gameState';
import { Row, Col } from 'reactstrap';
import useSound from 'use-sound';
import whoopsBtn from '../assets/images/button_whoops.png';
import OnTimeBtn from '../assets/images/button_right-and-on-time.png';
import rightAnswerSound from '../assets/sounds/mixkit-correct-answer-tone-2870.wav';
import wrongAnswerSound from '../assets/sounds/mixkit-wrong-answer-fail-notification-946.wav';

const Answer = () => {
    const [gameState, dispatch] = useContext(gameContext);
    //use state from context to get the id of the user currently playing
    //player object isPlaying property is true
    const isPlaying = gameState.listPlayers.find((player) => player.isPlaying === true).id;
    const nextPlayerId = isPlaying + 1;
    const [playRightAnswerSound] = useSound(rightAnswerSound);
    const [playWrongAnswerSound] = useSound(wrongAnswerSound);


    function nextPlayer(answerType) {

        if( answerType == 'wrongAnswer' ) playWrongAnswerSound();

        dispatch({
            type: 'NEXT_QUESTION'
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
        playRightAnswerSound();

        dispatch({
            type: 'ADD_POINTS',
            payload: isPlaying
        });

        nextPlayer('rightAnswer');
    }

    return (
        <Row>
            <Col>
                <Row>
                    <Col className='pt-1'>
                        <img
                            src={OnTimeBtn}
                            alt='Answered Correctly On Time'
                            role='button'
                            onClick={addPoints}
                            className='btn-custom'
                        />
                        {' '}
                        <img
                            src={whoopsBtn}
                            alt='Wrong Answer or Not On Time'
                            role='button'
                            onClick={() => nextPlayer('wrongAnswer')}
                            className='btn-custom'
                        />
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