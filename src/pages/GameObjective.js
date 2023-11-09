import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const GameObjective = () => {
    return (
        <>
            <div className='welcome'><p>Welcome to DiceQuizz Trivia</p></div>
            <div className='objective'>
                <p>The objective of the game is to answer trivia questions correctly and earn points.</p>
                <p>The sum of the two dice rolled not only determines the points but also the time available to answer each question.</p>
                <p>The player with the most points at the end wins.</p>
                <Link to={'gameboard'}>
                    <Button className='btn-objective'>Let's Go!</Button>
                </Link>
            </div >
        </>
    );
}

export default GameObjective;