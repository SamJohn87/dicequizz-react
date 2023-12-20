import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
/* import TinyImg from '/tinyimg.jpg';
import FlatIcon from '/flaticon_presentation.png';
import ExpressAdobe from '/expressadobe.jpg';
import ClickMinded from '/clickminded.png'; */


const Credits = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            src: '/flaticon_presentation.png',
            altText: 'FlatIcon',
            caption: 'FlatIcon',
            link: 'https://www.flaticon.com/',
            key: 1
        },
        {
            src: '/clickminded.png',
            altText: 'ClickMinded',
            caption: 'ClickMinded - Button Generator',
            link: 'https://www.clickminded.com/button-generator/',
            key: 2
        },
        {
            src: '/expressadobe.jpg',
            altText: 'Adobe Express',
            caption: 'Adobe Express - Background Remover',
            link: 'https://new.express.adobe.com/tools/remove-background',
            key: 3
        },
        {
            src: '/tinyimg.jpg',
            altText: 'Tiny Img',
            caption: 'Tiny Img - Image Compressor',
            link: 'https://tiny-img.com/image-compressor/',
            key: 4
        }
    ];

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className='bg-dark text-center'
            >
                <a href={item.link} target='_blank' rel='noreferrer'><img src={item.src} alt={item.altText} style={{ height: '500px' }} /></a>
                <CarouselCaption
                    captionText={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <Container className='bg-white pt-2' style={{ height: '100vh' }}>
            <Row>
                <Col>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {slides}
                        <CarouselControl
                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}
                        />
                        <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}
                        />
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col className='fs-1 text-center fw-bold pt-2' style={{ color: '#4F3180' }}>Credits</Col>
            </Row>
        </Container>
    )
};

export default Credits;