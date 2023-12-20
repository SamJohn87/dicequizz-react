import { useContext, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { gameContext } from './gameState';
import addPlayerBtn from '../assets/images/add-player.png';

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
            setErrorForm("The player's name should be between 2 and 10 letters, with no special characters.");
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
        <Row className='justify-content-md-center'>
            <Col className='m-4 rounded bg-light bg-opacity-15 shadow ' style={{ border: '2px dotted #9A93C6', height: '350px' }}>
                <Row className='h3 h-100'>
                    <Col sm={12} className='mt-auto mb-2 pe-3'>Who is playing?</Col>
                    <Col sm={12} style={{height: '40%'}}>
                        <form onSubmit={handleSubmit}>
                            <br />
                            <input
                                type='text'
                                value={newPlayer}
                                onChange={(e) => setNewPlayer(e.target.value)}
                                placeholder="Enter player's name"
                            />
                            <button type='submit' className='border-0 bg-light'>
                                <img 
                                    src={addPlayerBtn}
                                    width='50px'
                                    alt='Add a Player'
                                />
                            </button>
                        </form><br/>
                        <div className={errorForm ? 'alert alert-danger fs-6' : ''}>{errorForm}</div>
                    </Col>
                </Row>
            </Col>
        </Row>

    );
};

export default PlayerNameForm;
























