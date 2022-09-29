import React from 'react'
import { Container, Card, Title } from './styles'
import BubbleBG from '@/assets/background/bubble.png'

const AboutBanner: React.FC = () => {
    return (
        <Container paddingTop>
            <Card background={BubbleBG}>
                <Title>
                    Fazemos parte da vida e dos sonhos dos nossos alunos para
                    que tenham um futuro melhor!
                </Title>
            </Card>
        </Container>
    )
}

export default AboutBanner
