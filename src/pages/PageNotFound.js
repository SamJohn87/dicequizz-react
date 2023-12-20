import { Container, Row, Col } from 'reactstrap';
import Pagenotfound from '../assets/images/kostiantyn-li-Fi_nhg5itCw-unsplash.jpg';

const PageNotFound = () => {
    return (
        <Container fluid className='bg-white' style={{ height: '100vh' }}>
            <Row>
                <Col className='text-center'>
                    <img
                        src={Pagenotfound}
                        alt='Page Not Found'
                        width='50%'
                    />
                </Col>
            </Row>
            <Row>
                <Col className='small'>Image by <a href='https://www.linkedin.com/in/leedsn/' target='_blank' rel='noreferrer'>Kostiantyn Li</a>.</Col>
            </Row>
        </Container>
    )
};

export default PageNotFound;