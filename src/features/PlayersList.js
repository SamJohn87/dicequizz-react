import { Col, Row } from 'reactstrap';
import { gameContext } from './gameState';
import Player from './Player';
import { useContext } from 'react';

const PlayersList = () => {
    const [gameState] = useContext(gameContext);

    return (
        <Row className='rounded bg-white mt-2 mx-1 h-100'>
            <Col className='text-center h2 col-12 mb-3'>
                Players
            </Col>
            <Col className='h-100'>
                {gameState.listPlayers.map((player, index) => (
                    <Player key={index} player={player} />
                ))}
            </Col>
        </Row>
    )
};

export default PlayersList;