import React, { useEffect, useState } from 'react'
import { Container, Title, FormGroup, Input } from './styles'
import { CollegeService } from '@/service/college.service'
import CourseCategories from './categories'
import CourseList from './course-list'
import {
    ICollegeCourse,
    ICollegeCourseCategory
} from '@/interfaces/_college-course.interface'

const AnhangueraCourses: React.FC = () => {
    const collegeService = new CollegeService()

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [courses, setCourses] = useState<ICollegeCourse[]>([])
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
    const [categories, setCategories] = useState<ICollegeCourseCategory[]>([])
    const [currentCategory, setCurrentCategory] = useState<
        ICollegeCourseCategory | undefined
    >(undefined)

    useEffect(() => {
        getCourses()
        getCategories()
    }, [])

    const getCourses = () => {
        const courses = collegeService.getAll()
        setCourses(courses)
    }

    const getCategories = () => {
        const categories = collegeService.getCategories()
        setCategories(categories)
    }

    const onCategoryChanged = (category?: ICollegeCourseCategory) => {
        const courses = category
            ? collegeService.getByCategoryId(category.id)
            : collegeService.getAll()

        setSearchTerm('')
        setCourses(courses)
        setCurrentCategory(category)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setSearchTerm(value)

        const filterCourses = () => {
            const result = value
                ? collegeService.getByName(value)
                : collegeService.getAll()

            const courses = currentCategory
                ? collegeService.getByCategoryId(currentCategory.id, result)
                : result

            setCourses(courses)
        }

        if (timer) {
            clearTimeout(timer)
            setTimer(null)
        }

        setTimer(setTimeout(filterCourses, 750))
    }

    return (
        <Container>
            <Title>Confira os cursos disponiveis</Title>

            <FormGroup>
                <Input
                    placeholder="Digite o nome do curso..."
                    onChange={handleSearchChange}
                    value={searchTerm}
                />
            </FormGroup>

            <CourseCategories
                items={categories}
                onSelect={onCategoryChanged}
                currentId={currentCategory?.id}
            />
            <CourseList items={courses} />
        </Container>
    )
}

export default AnhangueraCourses
