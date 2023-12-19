import { Col, Row } from "reactstrap";
import { useSpring, animated } from "@react-spring/web";

const Player = ({ player }) => {
    //set player box style based on who's playing
    const bgColor = player.isPlaying ? 'isplaying-style' : '';
    const textColor = player.isPlaying ? 'text-white' : '';
    const pointsStyle = player.isPlaying ? 'text-white' : 'points-style';

    const playerAnimation = useSpring({
        from: { translateX: '50px', },
        to: { translateX: '0px' },
    });

    return (
        <animated.div style={playerAnimation}>
        <Row>
            <Col className={`${bgColor} player-details p-2 h6 shadow-lg mx-3`}>
                <Row>
                    <Col className={textColor}>{player.name}</Col>
                </Row>
                <Row className={`${pointsStyle} fw-bold`}>
                    <Col>{player.points} pts</Col>
                </Row>
            </Col>
        </Row>
        </animated.div>
    );
};

export default Player;
