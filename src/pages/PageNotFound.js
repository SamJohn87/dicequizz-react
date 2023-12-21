import { Container, Row, Col } from 'reactstrap';
import Pagenotfound from '../assets/images/kostiantyn-li-Fi_nhg5itCw-unsplash.jpg';

const PageNotFound = () => {
    return (
        <Container className='vh-100'>
            <Row>
                <Col className='bg-white'>
                    <img
                        src={Pagenotfound}
                        alt='Page Not Found'
                        className='img-fluid'
                    />
                    Image by <a href='https://www.linkedin.com/in/leedsn/' target='_blank' rel='noreferrer'>Kostiantyn Li</a>.
                </Col>
            </Row>
        </Container>
    )
};

export default PageNotFound;