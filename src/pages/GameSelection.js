import { Container, Row, Col } from "reactstrap";
import { useContext, useState } from "react";
import { gameContext } from "../features/gameState";
import { useNavigate } from "react-router-dom";

const GameSelection = () => {
    const [, dispatch] = useContext(gameContext);
    const [numQuestions, setNumQuestions] = useState(50);
    const [numValueError, setNumValueError] = useState('');
    const navigate = useNavigate();

    const checkValue = (number) => {

        if (Number(number) && number >= 20 && number <= 100) {
            setNumValueError('');
        } else {
            setNumValueError('Please enter a number between 20 and 100');
        }

        setNumQuestions(number);
    };

    const selectSettings = (category) => {
        dispatch({
            type: 'CHANGE_CATEGORY',
            payload: [category, Number(numQuestions)]
        });

        navigate('/gameboard');
    };

    return (
        <Container fluid className='score-board'>
            <Row>
                <Col className='fw-bold text-white fs-1 text-center'>
                    Game Settings
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col md='6' className='bg-white rounded-4 m-2 p-3 text-center'>
                    <Row>
                        <Col className='text-danger'>{numValueError}</Col>
                    </Row>
                    <Row>
                        <Col className='text-end'>Maximum Questions: </Col>
                        <Col className='text-start'>
                            <input
                                type='text'
                                value={numQuestions}
                                onChange={(e) => checkValue(e.target.value)}
                                placeholder='50'
                            />
                        </Col>
                    </Row>
                    <Row className='m-3 fw-bold'>
                        <Col>Select a category</Col>
                    </Row>
                    <Row className='m-3'>
                        <Col><button onClick={() => selectSettings('general_knowledge')} className='btn-custom fs-5 text-white fw-bold w-50'>General Knowledge</button></Col>
                    </Row>
                    <Row className='m-3'>
                        <Col><button onClick={() => selectSettings('music')} className='btn-custom fs-5 text-white fw-bold w-50'>Music</button></Col>
                    </Row>
                    <Row className='m-3'>
                        <Col><button onClick={() => selectSettings('history')} className='btn-custom fs-5 text-white fw-bold w-50'>History</button></Col>
                    </Row>
                    <Row className='m-3'>
                        <Col><button onClick={() => selectSettings('geography')} className='btn-custom fs-5 text-white fw-bold w-50'>Geography</button></Col>
                    </Row>
                    <Row className='m-3'>
                        <Col><button onClick={() => selectSettings('science')} className='btn-custom fs-5 text-white fw-bold w-50'>Science</button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default GameSelection;