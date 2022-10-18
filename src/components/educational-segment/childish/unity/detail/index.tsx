import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { IUnit } from '@/interfaces/unit.interface'
import WavesContainer from '@/components/common/waves-container'
import ScrollAnimation from '@/components/common/scroll-animation'
import { Container, Title, Button, ImageSlide } from './styles'
import Carousel, {
    SlideContainer,
    OptionType,
    ImageContainer
} from '@/components/common/carousel'
import AppFullImage from '@/components/common/app-full-image'

interface UnitDetailProps {
    item: IUnit
    onClose?: () => void
}
const UnitDetail: React.FC<UnitDetailProps> = props => {
    const [currentImage, setCurrentImage] = useState('')
    const { item, onClose } = props

    const handleClose = () => {
        if (onClose) onClose()
    }

    const carouselOptions: OptionType = {
        type: 'loop',
        autoplay: true,
        custom: { perPageResponsive: { xs: 1, sm: 1, md: 3, lg: 3, xl: 3 } }
    }

    if (!item.name) return <></>
    return (
        <>
            <ScrollAnimation id="unit-detail" animation="fadeInUp">
                <WavesContainer>
                    <Container>
                        <Title>
                            {item.name}
                            <Button onClick={handleClose}>
                                <MdClose />
                            </Button>
                        </Title>

                        <Carousel options={carouselOptions}>
                            {item.slidesImage.map((image, index) => (
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

export default UnitDetail
