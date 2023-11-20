import { useContext, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { gameContext } from './playersState';

const PlayerNameForm = () => {
    const [newPlayer, setNewPlayer] = useState('');
    const inputRegex = /^[A-Za-z]{2,10}$/;
    const [, dispatch] = useContext(gameContext);

    function handleSubmit(e) {
        e.preventDefault();

        if (inputRegex.test(newPlayer)) {
            dispatch({
                type: 'ADD_PLAYER',
                payload: newPlayer
            });
            setNewPlayer('');
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
























