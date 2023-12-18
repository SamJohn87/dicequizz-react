import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <footer className='site-footer fixed-bottom'>
            <Container fluid>
                <Row>
                    <Col>
                        &copy; <a href='https://github.com/SamJohn87' target='_blank' rel="noreferrer">Samantha Nisus-Johnson</a>
                    </Col>
                </Row>
                <Row>
                    <Col className='fst-italic' style={{ fontSize: '8px' }}>
                        <small>(Contributor: <a href='https://github.com/rocksteadykirk' target='_blank' rel="noreferrer">Kirk Goulbourne</a>)</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;