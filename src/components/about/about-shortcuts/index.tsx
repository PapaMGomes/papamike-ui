import React from 'react'
import { Container, Card, Title, Icon } from './styles'

const AboutShortcuts: React.FC = () => {
    const items = [
        {
            title: 'Infantil',
            action: () => {}
        },
        {
            title: 'Fundamental I',
            action: () => {}
        },
        {
            title: 'Fundamental II',
            action: () => {}
        },
        {
            title: 'Ensino Médio',
            action: () => {}
        },
        {
            title: 'Cursos',
            action: () => {}
        }
    ]

    return (
        <Container>
            {items.map((item, index) => (
                <Card key={index}>{item.title}</Card>
            ))}
        </Container>
    )
}

export default AboutShortcuts
