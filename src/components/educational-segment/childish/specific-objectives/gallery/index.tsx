import React, { useState } from 'react'
import { Container, ImageSlide } from './styles'
import Carousel, {
    OptionType,
    SlideContainer,
    ImageContainer
} from '@/components/common/carousel'
import { KIDS_IMAGES } from '@/config/gallery/kids.gallery'
import AppFullImage from '@/components/common/app-full-image'

const ChildishGallery: React.FC = () => {
    const [currentImage, setCurrentImage] = useState('')

    const carouselOptions: OptionType = {
        type: 'loop',
        autoplay: true,
        custom: { perPageResponsive: { xs: 1, sm: 1, md: 2, lg: 3, xl: 3 } }
    }

    return (
        <>
            <Container>
                <Carousel options={carouselOptions}>
                    {KIDS_IMAGES.map((image, index) => (
                        <SlideContainer key={index}>
                            <ImageContainer id={index}>
                                <ImageSlide
                                    src={image}
                                    onClick={() => setCurrentImage(image)}
                                />
                            </ImageContainer>
                        </SlideContainer>
                    ))}
                </Carousel>
            </Container>

            <AppFullImage
                image={currentImage}
                isOpen={!!currentImage}
                onBackdropClick={() => setCurrentImage('')}
            />
        </>
    )
}

export default ChildishGallery
