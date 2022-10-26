import React from 'react'
import Logo from '@/assets/images/logo.png'
import LogoKids from '@/assets/images/logo-kids.png'
import { Card, Title, ImageContainer, Image } from './styles'

const IntroductionBanner: React.FC = () => {
    return (
        <Card>
            <Title>
                Fazemos parte da vida e dos sonhos dos nossos alunos, para que
                tenham um futuro melhor!
            </Title>

            <ImageContainer>
                <Image src={Logo} />
                <Image src={LogoKids} />
            </ImageContainer>
        </Card>
    )
}

export default IntroductionBanner
