import { Col, Row } from 'reactstrap';
import { gameContext } from './gameState';
import Player from './Player';
import { useContext } from 'react';

const PlayersList = () => {
    const [gameState] = useContext(gameContext);

    return (
        <Row>
            <Col className='player-list rounded-4 bg-white m-2'>
                <Row>
                    <Col className='text-center h2'>
                        Players
                    </Col>
                </Row>
                {gameState.listPlayers.map((player, index) => (
                    <Player key={index} player={player} />
                ))}
            </Col>
        </Row>
    )
};

export default PlayersList;