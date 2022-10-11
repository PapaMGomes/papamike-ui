import React from 'react'
import {
    Card,
    Text,
    Title,
    CardText,
    Container,
    ImageSlide,
    ItemsContainer,
    GalleryContainer
} from './styles'

import Carousel, {
    ImageContainer,
    OptionType,
    SlideContainer
} from '@/components/common/carousel'
import ScrollAnimation from '@/components/common/scroll-animation'
import WavesContainer from '@/components/common/waves-container'
import { FUNDAMENTAL_ONE_INTEGRAL_IMAGES } from '@/config/gallery/funtamental-one.gallery'
import { ContainerHeaven } from '../styles'

const FundamentalOneIntegral: React.FC = () => {
    const carouselOptions: OptionType = {
        type: 'loop',
        autoplay: true,
        custom: { perPageResponsive: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 } }
    }

    const items = [
        `Café da manhã e almoço com sobremesa (balanceado por equipe de nutricionistas)`,
        `Atividades Esportivas`,
        `Hora do Conto: Literatura Infantil`,
        `Projetos temáticos: Datas comemorativas`,
        `Reforço escolar e orientação em pesquisas`,
        `Informática: Jogos Digitais e Pedagógicos`,
        `Horário disponível para realização da lição de casa`,
        `Momento de Relaxamento`,
        `Recreação de Oficinas: Artesanatos, Jogos, Culinária, Sessão pipoca`,
        `Festas Temáticas para comemorar os aniversariantes do Mês na última sexta-feira`,
        `Auxílio na centralidade dos estudantes com aprendizagem permanente, inclusão, gestão democrática e organização das tarefas`
    ]

    return (
        <ContainerHeaven>
            <Container>
                <Title>Integral</Title>

                <Text>
                    Esse modelo pode ser aderido pelas famílias por diversos
                    motivos e tem alguns benefícios aos alunos. Passar o dia na
                    escola traz às crianças novas vivências, aprendizados e
                    socialização.
                </Text>
                <Text>
                    Durante a permanência no Colégio, os alunos recebem almoço e
                    dois lanches e participam de atividades recreativas,
                    oficinas, circuitos e do brincar livre e dirigido.
                </Text>

                <Title>Nossos alunos contam com:</Title>
                <ItemsContainer>
                    {items.map((item, index) => (
                        <Card key={index}>
                            <CardText>{item}</CardText>
                        </Card>
                    ))}
                </ItemsContainer>
            </Container>

            <ScrollAnimation animation="fadeInUp">
                <WavesContainer>
                    <GalleryContainer>
                        <Carousel options={carouselOptions}>
                            {FUNDAMENTAL_ONE_INTEGRAL_IMAGES.map(
                                (image, index) => (
                                    <SlideContainer key={index}>
                                        <ImageContainer id={index}>
                                            <ImageSlide src={image} />
                                        </ImageContainer>
                                    </SlideContainer>
                                )
                            )}
                        </Carousel>
                    </GalleryContainer>
                </WavesContainer>
            </ScrollAnimation>
        </ContainerHeaven>
    )
}

export default FundamentalOneIntegral
