import React from 'react'
import Logo from '@/assets/images/logo.png'
import AnhangueraLogo from '@/assets/images/anhanguera-logo.png'

import {
    Container,
    TextContainer,
    Content,
    Title,
    Text,
    Figure,
    Image
} from './styles'

const AnhangueraIntroduction: React.FC = () => {
    return (
        <Container paddingTop>
            <Title>Anhanguera</Title>

            <Content>
                <TextContainer>
                    <Text>
                        A Anhanguera é uma das maiores instituições de ensino do
                        Brasil, formada por mais de 50 faculdades e centros
                        universitários. Em seus cursos presenciais e a
                        distância, a Anhanguera tem alunos em quase todos os
                        estados do país!
                    </Text>
                    <Text>
                        Mas não basta a quantidade, é preciso ter qualidade
                        também. Afinal, fazer uma graduação é investir tempo,
                        dinheiro e expectativas para se dar bem em uma nova
                        carreira. E a Anhanguera também se destaca nesse
                        quesito, com boas notas nas avaliações do Ministério da
                        Educação (MEC) e muitos cursos no topo do ranking!
                    </Text>
                </TextContainer>

                <Figure>
                    <Image src={AnhangueraLogo} />
                    <Image src={Logo} />
                </Figure>
            </Content>
        </Container>
    )
}

export default AnhangueraIntroduction
