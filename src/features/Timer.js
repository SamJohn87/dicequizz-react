import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { useContext } from 'react';
import { gameContext } from './gameState';
import useSound from 'use-sound';
import endTimer from '../assets/sounds/copper-bell-ding-3-172687.mp3';

const Timer = ({ stop }) => {
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [gameState] = useContext(gameContext);
    const [playEndTimer] = useSound(endTimer);

    useEffect(() => {
        if (secondsLeft === 0) {
            
            stop();
            playEndTimer();
            return;
        }

        const timeOut = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);

        return () => clearTimeout(timeOut);

    }, [secondsLeft]);

    useEffect(() => {
        setSecondsLeft(gameState.timer);
    }, [gameState.timer]);

    return (
        <Row>
            <Col className='fs-5 fw-bold'>Timer: {secondsLeft}</Col>
        </Row>
    );
};

export default Timer;




/*

The useEffect hook is used to perform side effects in function components. 
It takes a function as its first argument and an array of dependencies as its second argument.


setTimeout is a function provided by the JavaScript runtime environment, typically found in web browsers. 
It is a standard part of the JavaScript language and is used for scheduling the execution of a function or 
evaluating an expression after a specified period of time.


Dependency Array [secondsLeft]:
The dependency array [secondsLeft] specifies that the effect should re-run whenever the value of secondsLeft changes.
This ensures that the timeout is cleared and set again if secondsLeft changes during the component's lifecycle.

*/
