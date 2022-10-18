import React, { useState } from 'react'
import WavesContainer from '@/components/common/waves-container'
import ScrollAnimation from '@/components/common/scroll-animation'
import { HIGH_SCHOOL_IMAGES } from '@/config/gallery/high-school.gallery'
import { Container, GalleryContainer, Title, Text, ImageSlide } from './styles'

import Carousel, {
    ImageContainer,
    OptionType,
    SlideContainer
} from '@/components/common/carousel'
import AppFullImage from '@/components/common/app-full-image'

const HighSchoolObjective: React.FC = () => {
    const [currentImage, setCurrentImage] = useState('')
    const carouselOptions: OptionType = {
        type: 'loop',
        autoplay: true,
        custom: { perPageResponsive: { xs: 1, sm: 1, md: 2, lg: 3, xl: 3 } }
    }

    return (
        <>
            <Container>
                <Title>Objetivos Gerais</Title>

                <Text>
                    A possibilidade de flexibilização curricular é a maior
                    novidade para o Novo Ensino Médio. A prática já é
                    incorporada no Colégio Papa Mike, no Brasil e em outras
                    partes do mundo. Ao pensar na educação, que visa o
                    desenvolvimento da autonomia dos estudantes, conceder que
                    parte do seu currículo seja construído por seus interesses
                    próprios é bastante significante.
                </Text>

                <Text>
                    Algumas competências como por exemplo, empatia,
                    autoconhecimento, comunicação, senso crítico, científico e
                    criativo, estão alinhadas com a visão, valores e missão do
                    nosso Colégio, ao oferecer uma educação de qualidade para
                    cidadãos globais.
                </Text>

                <Text>
                    Um Novo Ensino Médio exige um olhar diferenciado para a
                    educação. Visando um objetivo, o protagonismo juvenil. Para
                    isso, as metodologias ativas e as avaliações significativas,
                    são fatores dessa nova proposta escolar.
                </Text>
            </Container>

            <ScrollAnimation animation="fadeInUp">
                <WavesContainer>
                    <GalleryContainer>
                        <Carousel options={carouselOptions}>
                            {HIGH_SCHOOL_IMAGES.map((image, index) => (
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
                    </GalleryContainer>
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

export default HighSchoolObjective
