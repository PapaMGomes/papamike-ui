import React from 'react'
import { IFreeCourse } from '@/interfaces/free-course.interface'
import { Container, Title, Card, CardTitle, Button, Image } from './styles'

interface CourseCardListProps {
    title?: string
    items: IFreeCourse[]
    onSelect?: (item: IFreeCourse) => void
}

const CourseCardList: React.FC<CourseCardListProps> = props => {
    const { items, title, onSelect } = props

    const handleSelect = (item: IFreeCourse) => {
        if (onSelect) onSelect(item)
    }

    return (
        <>
            <Title>{title}</Title>

            <Container>
                {items.map((item, index) => (
                    <Card key={index}>
                        <Image src={item.image} />

                        <CardTitle>{item.title}</CardTitle>
                        <Button onClick={() => handleSelect(item)}>
                            Saiba Mais
                        </Button>
                    </Card>
                ))}
            </Container>
        </>
    )
}

export default CourseCardList
