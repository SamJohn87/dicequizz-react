import { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { gameContext } from './gameState';
import Answer from './Answer';
import ShowAnswerBtn from '../assets/images/button_show-answer.png';

const Question = () => {
    const [gameState, dispatch] = useContext(gameContext);

    function handleShowAnswer() {
        dispatch({
            type: 'SHOW_ANSWER'
        });
    };

    return (
        <Row>
            <Col className='m-4 py-5 rounded bg-light shadow' style={{ border: '2px dotted #9A93C6'}}>
                <Row>
                    <Col className='fs-4 fw-bold'>
                        {gameState.trivia[gameState.questionIdx].question.text}
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-5'>
                        {!gameState.showAnswer &&
                            <img 
                                src={ShowAnswerBtn}
                                alt='Show Answer'
                                role='button'
                                onClick={handleShowAnswer}
                                className='btn-custom'
                            />
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