import { Container, Row, Col } from 'reactstrap';
import { useContext, useState } from 'react';
import { gameContext } from '../features/gameState';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import imgGeneralKnowledge from '../assets/images/button_general-knowledge.png';
import imgMusic from '../assets/images/button_music.png';
import imgHistory from '../assets/images/button_history.png';
import imgScience from '../assets/images/button_science.png';
import imgGeography from '../assets/images/button_geography.png';
import firstStep from '../assets/images/first_step.png';
import secondStep from '../assets/images/second_step.png';

const GameSelection = () => {
    const [, dispatch] = useContext(gameContext);
    const [numQuestions, setNumQuestions] = useState(50);
    const [numValueError, setNumValueError] = useState('');
    const navigate = useNavigate();

    const general_knowledgeAnimation = useSpring({
        from: { scale: 0, },
        to: { scale: 1 },
        delay: 500
    });

    const musicAnimation = useSpring({
        from: { scale: 0, },
        to: { scale: 1 },
        delay: 1000
    });

    const historyAnimation = useSpring({
        from: { scale: 0, },
        to: { scale: 1 },
        delay: 1500
    });

    const geographyAnimation = useSpring({
        from: { scale: 0, },
        to: { scale: 1 },
        delay: 2000
    });

    const scienceAnimation = useSpring({
        from: { scale: 0, },
        to: { scale: 1 },
        delay: 2500
    });

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
        <Container fluid className='bg-white rounded rounded-4 mt-5 pb-5 w-75 shadow-lg'>
            <Row>
                <Col className='fw-bold fs-1 text-center p-2 bg-light opacity-25 rounded-4'>
                    Game Settings
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col className='m-4 rounded bg-light bg-opacity-15 shadow' style={{ border: '2px dotted #9A93C6' }}>
                    <Row>
                        <Col xs={2} className='p-2'>
                            <img
                                src={firstStep}
                                alt='First Step'
                            />
                        </Col>
                        <Col xs={10} className='p-2 fw-bold'>
                            Maximum Questions:
                        </Col>
                    </Row>
                    <Row>
                        <Col className='p-5 text-center'>
                            <span className='text-danger'>{numValueError}</span><br />
                            <input
                                type='text'
                                value={numQuestions}
                                onChange={(e) => checkValue(e.target.value)}
                                placeholder='50'
                                style={{ width: '100px', height: '100px', fontSize: 50 }}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col className='m-4 rounded bg-light bg-opacity-15 shadow' style={{ border: '2px dotted #9A93C6' }}>
                    <Row>
                        <Col xs={2} className='p-2'>
                            <img
                                src={secondStep}
                                alt='Second Step'
                            />
                        </Col>
                        <Col xs={10} className='p-2 fw-bold'>
                            Select a Category:
                        </Col>
                        <Row className='d-flex'>
                            <Col className='text-center'>
                                <Row className='m-3'>
                                    <Col>
                                        <animated.div style={general_knowledgeAnimation}>
                                            <img
                                                src={imgGeneralKnowledge}
                                                alt='General Knowledge'
                                                width='50%'
                                                onClick={() => selectSettings('general_knowledge')}
                                            />
                                        </animated.div>
                                    </Col>
                                </Row>
                                <Row className='m-3'>
                                    <Col>
                                        <animated.div style={musicAnimation}>
                                            <img
                                                src={imgMusic}
                                                alt='Music'
                                                width='50%'
                                                onClick={() => selectSettings('music')}
                                            />
                                        </animated.div>
                                    </Col>
                                </Row>
                                <Row className='m-3'>
                                    <Col>
                                        <animated.div style={historyAnimation}>
                                            <img
                                                src={imgHistory}
                                                alt='History'
                                                width='50%'
                                                onClick={() => selectSettings('history')}
                                            />
                                        </animated.div>
                                    </Col>
                                </Row>
                                <Row className='m-3'>
                                    <Col>
                                        <animated.div style={geographyAnimation}>
                                            <img
                                                src={imgGeography}
                                                alt='Geography'
                                                width='50%'
                                                onClick={() => selectSettings('geography')}
                                            />
                                        </animated.div>
                                    </Col>
                                </Row>
                                <Row className='m-3'>
                                    <Col>
                                        <animated.div style={scienceAnimation}>
                                            <img
                                                src={imgScience}
                                                alt='Science'
                                                width='50%'
                                                onClick={() => selectSettings('science')}
                                            />
                                        </animated.div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default GameSelection;