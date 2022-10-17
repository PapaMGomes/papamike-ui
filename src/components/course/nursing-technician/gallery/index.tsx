import React from 'react'
import { Container, ImageSlide } from './styles'
import WavesContainer from '@/components/common/waves-container'
import ScrollAnimation from '@/components/common/scroll-animation'
import {
    NURSING_IMAGES,
    NURSING_EVENTS_IMAGES,
    NURSING_INSTALLATIONS_IMAGES
} from '@/config/gallery/nursing.gallery'
import Carousel, {
    OptionType,
    SlideContainer,
    ImageContainer
} from '@/components/common/carousel'

const NursingTechnicianGallery: React.FC = () => {
    const carouselOptions: OptionType = {
        type: 'loop',
        autoplay: true,
        custom: { perPageResponsive: { xs: 1, sm: 1, md: 2, lg: 4, xl: 4 } }
    }

    const images = [
        ...NURSING_IMAGES,
        ...NURSING_EVENTS_IMAGES,
        ...NURSING_INSTALLATIONS_IMAGES
    ]

    return (
        <ScrollAnimation animation="fadeInUp">
            <WavesContainer>
                <Container>
                    <Carousel options={carouselOptions}>
                        {images.map((image, index) => (
                            <SlideContainer key={index}>
                                <ImageContainer id={index}>
                                    <ImageSlide src={image} />
                                </ImageContainer>
                            </SlideContainer>
                        ))}
                    </Carousel>
                </Container>
            </WavesContainer>
        </ScrollAnimation>
    )
}

export default NursingTechnicianGallery
