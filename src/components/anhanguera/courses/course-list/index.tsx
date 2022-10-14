import { ICollegeCourse } from '@/interfaces/_college-course.interface'
import React from 'react'

import { Container, Card, CardTitle, CardSubtitle } from './styles'

interface CourseListProps {
    items: ICollegeCourse[]
}

const CourseList: React.FC<CourseListProps> = props => {
    const { items } = props
    return (
        <Container>
            {items.map((item, index) => (
                <Card key={index}>
                    <CardTitle>{item.name}</CardTitle>
                    <CardSubtitle>{item.category.name}</CardSubtitle>
                </Card>
            ))}
        </Container>
    )
}

export default CourseList
