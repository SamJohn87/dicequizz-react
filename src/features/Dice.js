import { useContext } from "react";
import { gameContext } from "./playersState";
import { Row, Col } from "reactstrap";
import Die from "../components/Die";
import Timer from "./Timer";
import Question from "./Question";

const Dice = () => {
    const [gameState, dispatch] = useContext(gameContext);

    const rollDice = () => {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        dispatch({
            type: 'ROLL_DICE',
            payload: [roll1, roll2]
        });
    };

    return (
        <Row>
            <Col>
                <Row className='gameboard-header p-2 justify-content-around rounded-4'>
                    <Col>
                        {gameState.dice.length > 0 &&
                            <Row>
                                <Col>
                                    <Die value={gameState.dice[1]} />
                                </Col>
                                <Col>
                                    <Die value={gameState.dice[0]} />
                                </Col>
                            </Row>
                        }
                    </Col>
                    <Col className='align-self-center'>
                        <button onClick={rollDice} className='btn-custom fs-6 text-white fw-bold'>Roll Dice!</button>
                    </Col>
                    <Col className='align-self-center'>
                        <Timer timerValue={gameState.timer} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {gameState.dice.length > 0 &&
                            <Question />
                        }
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Dice;