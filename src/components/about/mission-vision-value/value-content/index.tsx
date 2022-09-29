import React from 'react'
import { Container, Title, Text, Content, Card, CardTitle } from './styles'

const ValueContent: React.FC = () => {
    const items = [
        {
            title: `Ambiente acolhedor`,
            description: `postura acolhedora com o próximo, respeitando a dignidade de cada um`
        },
        {
            title: `Integridade`,
            description: `Buscamos integrar diferentes tipos de alunos, sem distinguir seja por sexo, raça, cor, etc`
        },
        {
            title: `Empreendedorismo`,
            description: `Visão de liderança, educação financeira e mercado inovador`
        },
        {
            title: `Colaboração e Sustentabilidade`,
            description: `Visão compartilhada, educação em rede e solidariedade`
        },
        {
            title: `Inovação e Criatividade`,
            description: `Projeto de vida com Maker, aliar a educação junto a tecnologia`
        },
        {
            title: `Formação Integral`,
            description: `Nas dimensões cognitivas/socioemocional integrados entre formação acadêmica e mundo.`
        }
    ]

    return (
        <Container>
            <Title>Valores</Title>
            <Content>
                {items.map((item, index) => (
                    <Card key={index}>
                        <CardTitle>{item.title}</CardTitle>
                        <Text>{item.description}</Text>
                    </Card>
                ))}
            </Content>
        </Container>
    )
}

export default ValueContent
