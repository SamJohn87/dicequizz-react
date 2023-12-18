import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { Container, Col, Row, Card, CardBody, CardImg } from "reactstrap";
import quizIcon from '../assets/images/shutterstock_2350330561.jpg';

const GameObjective = () => {
    const card1Animation = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 500
    });

    const card2Animation = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 1000
    });

    const card3Animation = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 1500
    });

    const logoAnimation = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 700,
        loop: true
    });


    return (
        <Container fluid>
            <Row>
                <Col className='theme rounded-4 text-center text-white fs-1 m-4 p-3 fw-bold shadow-lg'>Welcome to DiceQuizz Trivia</Col>
            </Row>
            <Row fluid className='bg-white rounded d-flex align-items-center p-5 m-3'>
                {/* <Col className='theme rounded-4 text-center text-white fs-3 p-5 m-4'>
                    <p>The objective of the game is to answer trivia questions correctly and earn points.</p>
                    <p>The sum of the two dice rolled not only determines the points but also the time available to answer each question.</p>
                    <p>The player with the most points at the end wins.</p>
                    <Link to={'gameselection'}>
                        <button className='btn-custom fs-5 text-white fw-bold shadow-lg'>Let's Go!</button>
                    </Link>
                </Col> */}
                <Col>
                    <animated.div style={logoAnimation}>
                        <Card className='border-0'>
                            <CardImg
                                src={quizIcon}
                                alt='quiz icon'
                            />
                        </Card>
                    </animated.div>
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
        </Container>
    );
}

export default GameObjective;