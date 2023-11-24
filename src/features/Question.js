import { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { gameContext } from './gameState';
import Answer from './Answer';

const Question = () => {
    const [gameState, dispatch] = useContext(gameContext);

    function handleShowAnswer() {
        dispatch({
            type: 'SHOW_ANSWER'
        });
    };

    return (
        <Row>
            <Col className='gameboard-main rounded-4 mt-3 pt-5'>
                <Row>
                    <Col className='fs-4 fw-bold'>
                        {gameState.trivia[gameState.questionIdx].question.text}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {!gameState.showAnswer &&
                            <button className='btn-custom fs-5 text-white fw-bold mt-5' onClick={handleShowAnswer}>Show Answer</button>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {gameState.showAnswer ? <Answer /> : null}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Question;