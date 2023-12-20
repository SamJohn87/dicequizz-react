import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='site-footer opacity-50 text-white p-2 fixed-bottom'>
                        &copy; <a href='https://github.com/SamJohn87' target='_blank' rel="noreferrer">Samantha Nisus-Johnson</a><br />
                        <small className='fst-italic' style={{ fontSize: '8px' }}>(Contributor: <a href='https://github.com/rocksteadykirk' target='_blank' rel='noreferrer'>Kirk Goulbourne</a>)</small> - <Link to={'credits'}><small className='fst-italic' style={{ fontSize: '8px' }}>Credits</small></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;