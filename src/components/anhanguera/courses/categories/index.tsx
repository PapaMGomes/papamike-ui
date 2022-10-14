import { ICollegeCourseCategory } from '@/interfaces/_college-course.interface'
import React from 'react'
import { Container, Button } from './styles'

interface CourseCategoriesProps {
    items: ICollegeCourseCategory[]
    currentId?: number
    onSelect?: (category?: ICollegeCourseCategory) => void
}
const CourseCategories: React.FC<CourseCategoriesProps> = props => {
    const { items, onSelect, currentId } = props

    const handleSelect = (category?: ICollegeCourseCategory) => {
        if (onSelect) onSelect(category)
    }

    return (
        <Container>
            <Button onClick={() => handleSelect()} isActive={!currentId}>
                Todos
            </Button>

            {items.map((item, index) => (
                <Button
                    key={index}
                    isActive={currentId === item.id}
                    onClick={() => handleSelect(item)}
                >
                    {item.name}
                </Button>
            ))}
        </Container>
    )
}

export default CourseCategories
