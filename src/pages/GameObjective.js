import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";

const GameObjective = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='theme rounded-4 text-center text-white fs-1 p-3 m-4 fw-bold'>Welcome to DiceQuizz Trivia</Col>
            </Row>
            <Row >
                <Col className='theme rounded-4 text-center text-white fs-3 p-5 m-4'>
                    <p>The objective of the game is to answer trivia questions correctly and earn points.</p>
                    <p>The sum of the two dice rolled not only determines the points but also the time available to answer each question.</p>
                    <p>The player with the most points at the end wins.</p>
                    <Link to={'gameboard'}>
                        <button className='btn-custom fs-5 text-white fw-bold'>Let's Go!</button>
                    </Link>
                </Col>
            </Row >
        </Container>
    );
}

export default GameObjective;