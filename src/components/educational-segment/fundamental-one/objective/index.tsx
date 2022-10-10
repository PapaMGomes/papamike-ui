import React from 'react'
import WavesContainer from '@/components/common/waves-container'
import ScrollAnimation from '@/components/common/scroll-animation'
import { Container, GalleryContainer, Title, Text, ImageSlide } from './styles'
import { FUNDAMENTAL_ONE_IMAGES } from '@/config/gallery/funtamental-one.gallery'

import Carousel, {
    ImageContainer,
    OptionType,
    SlideContainer
} from '@/components/common/carousel'
import { ContainerHeaven } from '../styles'

const FundamentalOneObjective: React.FC = () => {
    const carouselOptions: OptionType = {
        type: 'loop',
        autoplay: true,
        custom: { perPageResponsive: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 } }
    }

    return (
        <ContainerHeaven>
            <Container>
                <Title>Objetivos Gerais</Title>

                <Text>
                    No Colégio Papa Mike estimulamos novas formas de interagir
                    com o mundo conectado em que vivemos, possibilitando a
                    construção mais sólida do conhecimento. Uma aprendizagem
                    baseada no pensar, no fazer e no criar, que prioriza a
                    criatividade e a capacidade de resolver problemas na
                    prática.
                </Text>

                <Text>
                    Visamos nos manter entre as melhores Instituições de Ensino
                    da cidade de Osasco, marca reconhecida em todo estado de São
                    Paulo, como referência de ótimos métodos pedagógicos
                    aplicados à educação e novas tecnologias.
                </Text>

                <Text>
                    Nossa missão é capacitar pessoas interessadas na busca do
                    saber, para que possam atingir seu potencial pleno.
                </Text>
            </Container>

            <ScrollAnimation animation="fadeInUp">
                <WavesContainer>
                    <GalleryContainer>
                        <Carousel options={carouselOptions}>
                            {FUNDAMENTAL_ONE_IMAGES.map((image, index) => (
                                <SlideContainer key={index}>
                                    <ImageContainer id={index}>
                                        <ImageSlide src={image} />
                                    </ImageContainer>
                                </SlideContainer>
                            ))}
                        </Carousel>
                    </GalleryContainer>
                </WavesContainer>
            </ScrollAnimation>
        </ContainerHeaven>
    )
}

export default FundamentalOneObjective
