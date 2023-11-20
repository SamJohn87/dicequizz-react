import { Col, Row } from "reactstrap";

const Player = ({ player }) => {
    //set player box style based on who's playing
    const bgColor = player.isPlaying ? 'isplaying-style' : '';
    const textColor = player.isPlaying ? 'text-white' : '';
    const pointsStyle = player.isPlaying ? 'text-white' : 'points-style';

    return (
        <Row>
            <Col className={`${bgColor} player-details m-1 p-2 h6`}>
                <Row>
                    <Col className={textColor}>{player.name}</Col>
                </Row>
                <Row className={`${pointsStyle} fw-bold`}>
                    <Col>{player.points} pts</Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Player;
