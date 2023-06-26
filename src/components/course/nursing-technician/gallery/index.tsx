import React, { useState } from 'react'
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
import AppFullImage from '@/components/common/app-full-image'

const NursingTechnicianGallery: React.FC = () => {
    const [currentImage, setCurrentImage] = useState('')

    const carouselOptions: OptionType = {
        type: 'loop',
        autoplay: true,
        custom: { perPageResponsive: { xs: 1, sm: 1, md: 2, lg: 3, xl: 3 } }
    }

    const images = [
        ...NURSING_IMAGES,
        ...NURSING_EVENTS_IMAGES,
        ...NURSING_INSTALLATIONS_IMAGES
    ]

    return (
        <>
            <ScrollAnimation animation="fadeInUp">
                <WavesContainer>
                    <Container>
                        <Carousel options={carouselOptions}>
                            {images.map((image, index) => (
                                <SlideContainer key={index}>
                                    <ImageContainer id={index}>
                                        <ImageSlide
                                            src={image}
                                            onClick={() =>
                                                setCurrentImage(image)
                                            }
                                        />
                                    </ImageContainer>
                                </SlideContainer>
                            ))}
                        </Carousel>
                    </Container>
                </WavesContainer>
            </ScrollAnimation>

            <AppFullImage
                image={currentImage}
                isOpen={!!currentImage}
                onBackdropClick={() => setCurrentImage('')}
            />
        </>
    )
}

export default NursingTechnicianGallery
