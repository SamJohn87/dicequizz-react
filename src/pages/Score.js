import { useContext } from "react";
import { gameContext } from "../features/playersState";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Player from "../features/Player";

const Score = () => {
    const [gameState, dispatch] = useContext(gameContext);
    //sort is a mutating array method...workaround by using the spread syntax
    const scoreDesc = [...gameState.listPlayers].sort((curScore, nextScore) => nextScore.points - curScore.points);   
    const navigate = useNavigate();

    const playAgain = () => {
        dispatch({
            type: 'RESET_GAME'
        });
        navigate('/gameboard');
    }

    return (
        <Container fluid className='score-board'>
            <Row>
                <Col className='fw-bold text-white fs-1 text-center'>
                    Final Score
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md='6' className="bg-white rounded-4 m-2 p-3 text-center">
                    {scoreDesc.map((player, index) => (
                        <Player key={index} player={player} />
                    ))}
                </Col>
            </Row>
            <Row>
                <Col className='text-center m-3'>
                    <button onClick={playAgain} className='btn-custom fs-5 text-white fw-bold'>Play Again</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Score;