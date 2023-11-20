import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gameContext } from "./playersState";
import { Row, Col } from "reactstrap";
import Die from "../components/Die";
import Timer from "./Timer";
import Question from "./Question";

const Dice = () => {
    const [gameState, dispatch] = useContext(gameContext);
    const [rollBtnOn, setRollBtnOn] = useState(true);
    const navigate = useNavigate();

    const rollDice = () => {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        setRollBtnOn(false);

        dispatch({
            type: 'ROLL_DICE',
            payload: [roll1, roll2]
        });
    };

    useEffect(() => {
        if (gameState.questionIdx < gameState.trivia.length - 1) {
            setRollBtnOn(true); // display roll dice btn every time click on whoops btn which change the listPlayers property of the game state
        } else {
            dispatch({
                type: 'NEXT_QUESTION'
            });
            navigate('/score');
        }
    }, [gameState.listPlayers])

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
                        {rollBtnOn &&
                            <button onClick={rollDice} className='btn-custom fs-6 text-white fw-bold'>Roll Dice!</button>
                        }
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