import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { Container, Col, Row, Card, CardBody, CardImg } from 'reactstrap';
import diceIcon from '../assets/images/shutterstock-739407751-657fc278005ea.jpg';
import playButton from '../assets/images/play.png';

const GameObjective = () => {
    const card1Animation = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 1000
    });

    const card2Animation = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 1500
    });

    const card3Animation = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 2000
    });

    const playAnimation = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 700,
        loop: true
    });


    return (
        <Container fluid>
            <Row>
                <Col className='theme rounded-4 text-center text-white fs-1 m-3 p-3 fw-bold shadow-lg'>Welcome to DiceQuizz Trivia</Col>
            </Row>
            <Row fluid className='bg-white rounded d-flex align-items-center p-5 m-2'>
                <Col>
                    <Row className='d-flex align-items-center'>
                        <Col>
                            <Card className='border-0'>
                                <CardImg
                                    src={diceIcon}
                                    alt='Dice Icon'
                                />
                            </Card>
                        </Col>
                        <Col className='m-2'>
                            <animated.div style={card1Animation}>
                                <Card className='border border-3 shadow-lg h-50' >
                                    <CardBody className='p-5 fw-bold text-center fs-5 bg-light'>
                                        Roll the dice, answer the question correctly, and earn points.
                                    </CardBody>
                                </Card>
                            </animated.div>
                        </Col>
                        <Col className='m-2'>
                            <animated.div style={card2Animation}>
                                <Card className='border border-3 shadow-lg h-50'>
                                    <CardBody className='p-5 fw-bold text-center fs-5 bg-light' >
                                        The sum of the two dice rolled not only determines the points but also the time available to answer each question.
                                    </CardBody>
                                </Card>
                            </animated.div>
                        </Col>
                        <Col className='m-2'>
                            <animated.div style={card3Animation}>
                                <Card className='border border-3 shadow-lg h-50'>
                                    <CardBody className='p-5 fw-bold text-center fs-5 bg-light'>
                                        The player with the most points at the end wins.
                                    </CardBody>
                                </Card>
                            </animated.div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-row-reverse'>
                            <Link to={'gameselection'}>
                                <animated.div style={playAnimation}>
                                    <Card className='border-0'>
                                        <CardImg
                                            src={playButton}
                                            alt='Play Button'
                                            width='50px'
                                            height='50px'
                                        />
                                    </Card>
                                </animated.div>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default GameObjective;