import { Container } from './styles'
import React, { useState } from 'react'
import IntroductionBanner from './introduction-banner'
import MatriculationBanner from './matriculation-banner'
import Carousel, {
    OptionType,
    SlideContainer
} from '@/components/common/carousel'

const AboutBanner: React.FC = () => {
    const [options, setOptions] = useState<OptionType>({
        type: 'loop',
        gap: 10,
        arrows: false,
        autoplay: true,
        interval: 5000
    })

    const data = [
        <MatriculationBanner key="MatriculationBanner" />,
        <IntroductionBanner key="IntroductionBanner" />
    ]

    const onSlideChange = (e: any) => {
        const [{ index }] = e
        const setSlideInterval = (interval: number) =>
            setOptions({ ...options, interval })

        if (index === 0) setSlideInterval(5000)
        else if (index === 1) setSlideInterval(10000)
    }

    return (
        <Container paddingTop>
            <Carousel padding="0" options={options} onMoved={onSlideChange}>
                {data.map((item, index) => (
                    <SlideContainer key={index}>{item}</SlideContainer>
                ))}
            </Carousel>
        </Container>
    )
}

export default AboutBanner
