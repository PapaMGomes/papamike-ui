import React, { useState } from 'react'
import WavesContainer from '@/components/common/waves-container'
import ScrollAnimation from '@/components/common/scroll-animation'
import { Container, GalleryContainer, Title, Text, ImageSlide } from './styles'
import { FUNDAMENTAL_TWO_IMAGES } from '@/config/gallery/fundamental-two.gallery'

import Carousel, {
    ImageContainer,
    OptionType,
    SlideContainer
} from '@/components/common/carousel'
import AppFullImage from '@/components/common/app-full-image'

const FundamentalTwoObjective: React.FC = () => {
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
                    No Colégio Papa Mike seu filho vai ter uma formação global,
                    digital e criativa, totalmente conectada com o mundo em que
                    vivemos. Uma aprendizagem sólida, que vai proporcionar novos
                    conhecimentos e habilidades para ele transformar o mundo
                    hoje e amanhã. Do 6º ao 9º ano os jovens estão em
                    transformação. São dinâmicos, curiosos, motivados e estão na
                    fase de ampliar suas conexões intelectuais, afetivas e
                    sociais.
                </Text>

                <Text>
                    Os jovens são estimulados a ter um pensamento
                    multidisciplinar por meio de aulas interativas. Com muita
                    autonomia, respeito às diferenças e visão ampliada, eles
                    estarão preparados para os desafios do Ensino Médio e da
                    vida.
                </Text>

                <Text>
                    É um momento importante de transição entre a infância e a
                    adolescência, marcado pelo fortalecimento da autonomia e por
                    várias transformações biológicas, psicológicas e sociais que
                    vão intensificar a construção dos seus valores.
                </Text>
            </Container>

            <ScrollAnimation animation="fadeInUp">
                <WavesContainer>
                    <GalleryContainer>
                        <Carousel options={carouselOptions}>
                            {FUNDAMENTAL_TWO_IMAGES.map((image, index) => (
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

export default FundamentalTwoObjective
