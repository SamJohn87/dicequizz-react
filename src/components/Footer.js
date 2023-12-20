import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='site-footer opacity-50 text-white mt-5 p-2'>
                        &copy; <a href='https://github.com/SamJohn87' target='_blank' rel="noreferrer">Samantha Nisus-Johnson</a><br />
                        <small className='fst-italic' style={{ fontSize: '8px' }}>(Contributor: <a href='https://github.com/rocksteadykirk' target='_blank' rel="noreferrer">Kirk Goulbourne</a>)</small>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;