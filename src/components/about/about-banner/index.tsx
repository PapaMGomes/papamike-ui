import React from 'react'
import { Container } from './styles'
import IntroductionBanner from './introduction-banner'
import MatriculationBanner from './matriculation-banner'
import Carousel, {
    OptionType,
    SlideContainer
} from '@/components/common/carousel'

const AboutBanner: React.FC = () => {
    const options: OptionType = {
        type: 'loop',
        gap: 10,
        arrows: false,
        autoplay: true,
        interval: 10000
    }

    const data = [
        <IntroductionBanner key="IntroductionBanner" />,
        <MatriculationBanner key="MatriculationBanner" />
    ]

    return (
        <Container paddingTop>
            <Carousel padding="0" options={options}>
                {data.map((item, index) => (
                    <SlideContainer key={index}>{item}</SlideContainer>
                ))}
            </Carousel>
        </Container>
    )
}

export default AboutBanner
