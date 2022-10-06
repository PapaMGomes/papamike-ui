import React from 'react'
import { useRouter } from 'next/router'
import { Container, Card, Title } from './styles'

const Segments: React.FC = () => {
    const { push: navigate } = useRouter()

    const items = [
        {
            name: 'Infantil',
            action: () => navigate('educational-segment/childish')
        },
        { name: 'Fundamental I', action: () => navigate('') },
        { name: 'Fundamental II', action: () => navigate('') },
        { name: 'Ensino Médio', action: () => navigate('') }
    ]

    return (
        <Container>
            {items.map((item, index) => (
                <Card key={index} onClick={() => item.action()}>
                    <Title>{item.name}</Title>
                </Card>
            ))}
        </Container>
    )
}

export default Segments
