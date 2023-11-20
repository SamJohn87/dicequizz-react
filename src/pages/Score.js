import { useContext } from "react";
import { gameContext } from "../features/playersState";

const Score = () => {
    const [gameState, dispatch] = useContext(gameContext);
    console.log(gameState);
    return (
        <h1>SCORE PAGE</h1>
    );
};

export default Score;