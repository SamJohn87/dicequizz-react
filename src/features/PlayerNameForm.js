import { useContext, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { gameContext } from './gameState';

const PlayerNameForm = () => {
    const [newPlayer, setNewPlayer] = useState('');
    const [errorForm, setErrorForm] = useState('');
    const inputRegex = /^[A-Za-z]{2,10}$/;
    const [gameState, dispatch] = useContext(gameContext);

    function handleSubmit(e) {
        e.preventDefault();

        if (gameState.listPlayers.length >= 8) {
            setErrorForm('You cannot have more than 8 players.');
        } else if (!inputRegex.test(newPlayer)) {
            setErrorForm('The player\'s name should have at least 2 letters with no special characters!');
        } else {
            dispatch({
                type: 'ADD_PLAYER',
                payload: newPlayer
            });
            setNewPlayer('');
            setErrorForm('');
        }
    }

    return (
        <Row>
            <Col>
                <Row>
                    <Col className='h3'>
                        Who is playing?
                    </Col>
                </Row>
                <Row className='playerForm p-5 rounded-4 m-3'>
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col className='text-danger'>
                                    {errorForm}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input
                                        type='text'
                                        value={newPlayer}
                                        onChange={(e) => setNewPlayer(e.target.value)}
                                        placeholder='Enter player name'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='pt-4'>
                                    <button type='submit' className='btn-custom fs-5 text-white fw-bold'>Add</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default PlayerNameForm;
























