import { useRouter } from 'next/router'
import React from 'react'
import { Container, Card, Title, Icon } from './styles'

const AboutShortcuts: React.FC = () => {
    const router = useRouter()

    const items = [
        {
            title: 'Infantil',
            action: () => router.push('/educational-segment/childish')
        },
        {
            title: 'Fundamental I',
            action: () => router.push('/educational-segment/fundamental-one')
        },
        {
            title: 'Fundamental II',
            action: () => router.push('/educational-segment/fundamental-two')
        },
        {
            title: 'Ensino Médio',
            action: () => router.push('/educational-segment/high-school')
        },
        {
            title: 'Cursos',
            action: () => {}
        }
    ]

    return (
        <Container>
            {items.map((item, index) => (
                <Card key={index} onClick={item.action}>
                    {item.title}
                </Card>
            ))}
        </Container>
    )
}

export default AboutShortcuts
