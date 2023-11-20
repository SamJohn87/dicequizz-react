import { Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <Row>
            <Col>
                <footer className='site-footer'>
                    &copy; <a href='https://github.com/SamJohn87' target='_blank'>Samantha Nisus-Johnson</a> & <a href='https://github.com/rocksteadykirk' target='_blank'>Kirk Goulbourne</a>
                </footer>
            </Col>
        </Row>
    );
};

export default Footer;