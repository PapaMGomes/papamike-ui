import React from 'react'
import BG from '@/assets/bg.jpg'
import AppHead from '@/components/common/app-head'
import { Container, Image, Content } from '@/styles/pages/home'
import Carousel, {
    SlideContainer,
    OptionType
} from '@/components/common/carousel'

const Home: React.FC = () => {
    const options: OptionType = {
        type: 'loop',
        gap: 10,
        speed: 1250,
        arrows: false,
        autoplay: true,
        interval: 2000,
        custom: {
            perPageResponsive: {
                xs: 1,
                sm: 1,
                md: 3,
                lg: 2,
                xl: 1
            }
        }
    }

    const data = [BG, BG, BG, BG, BG, BG]

    return (
        <>
            <AppHead title="Home" />

            <Container paddingTop>
                <Carousel padding="0" options={options}>
                    {data.map((item, index) => (
                        <SlideContainer key={index}>
                            <Content>
                                <Image src={item} />
                            </Content>
                        </SlideContainer>
                    ))}
                </Carousel>
            </Container>
        </>
    )
}

export default Home
