import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gameContext } from "./gameState";
import { Row, Col } from "reactstrap";
import Die from "../components/Die";
import Timer from "./Timer";
import Question from "./Question";
import rollDiceBtn from '../assets/images/button_roll-dice.png';

const Dice = () => {
    const [gameState, dispatch] = useContext(gameContext);
    const [rollBtnOn, setRollBtnOn] = useState(true);
    const [rolling, setRolling] = useState(false)
    const navigate = useNavigate();

    const rollDice = () => {
        const face1 = Math.floor(Math.random() * 6) + 1;
        const face2 = Math.floor(Math.random() * 6) + 1;
        setRollBtnOn(false);
        setRolling(true);

        setTimeout(() => {
            // Set rolling to false again when time over 
            setRolling(false);
        }, 1000)

        dispatch({
            type: 'ROLL_DICE',
            payload: [face1, face2]
        });
    };

    useEffect(() => {
        if (gameState.questionIdx !== null) {
            if (gameState.questionIdx < gameState.trivia.length - 1) {
                setRollBtnOn(true); // display roll dice btn every time click on whoops btn which change the listPlayers property of the game state
            } else {
                dispatch({
                    type: 'NEXT_QUESTION'
                });
                navigate('/score');
            }
        }
    }, [gameState.listPlayers])

    return (
        <Row className='bg-white rounded' style={{ height: '523px' }}>
            <Col sm={4} style={{ height: '10%' }}>
                {gameState.dice.length > 0 &&
                    <Row className='mt-2 ms-2'>
                        <Col xs={6}>
                            <Die face={gameState.dice[0]} rolling={rolling} />
                        </Col>
                        <Col>
                            <Die face={gameState.dice[1]} rolling={rolling} />
                        </Col>
                    </Row>
                }
            </Col>
            <Col sm={4} className='mt-3' style={{ height: '10%' }}>
                {rollBtnOn &&
                <img
                    src={rollDiceBtn}
                    role='button'
                    width='50%'
                    onClick={rollDice}
                    className='btn-custom'
                />
                } 
            </Col>
            <Col sm={4} className='align-self-center mt-4'>
                <Timer timerValue={gameState.timer} />
            </Col>
            <Col sm={12} className='h-75 mt-5'>
                {gameState.dice.length > 0 &&
                    <Question />
                }
            </Col>
        </Row>
    );
};

export default Dice;