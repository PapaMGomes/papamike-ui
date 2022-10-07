import React from 'react'
import { Container, Title, Text } from './styles'

const ChildishIntroduction: React.FC = () => {
    return (
        <Container>
            <Title>Objetivos Específicos por faixa etária</Title>
            <Text>
                Seu principal objetivo é promover nos pequenos estudantes o
                desenvolvimento dos aspectos físico, motor, cognitivo, social e
                emocional, além de fomentar a exploração, experimentação e as
                descobertas.
            </Text>

            <Text>
                É nesta fase também que as crianças começam a interagir com
                pessoas de fora do seu círculo familiar e comunitário,
                principalmente através da realização de jogos e atividades que
                envolvem a ludicidade.
            </Text>
        </Container>
    )
}

export default ChildishIntroduction
