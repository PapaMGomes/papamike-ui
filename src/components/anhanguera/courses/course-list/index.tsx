import React, { useEffect, useState } from 'react'
import AppPaginator from '@/components/common/app-paginator'
import { PaginationService } from '@/service/_pagination.service'
import { Container, Card, CardTitle, CardSubtitle } from './styles'
import { IPagination } from '@/interfaces/_app-pagination.interface'
import { ICollegeCourse } from '@/interfaces/_college-course.interface'

interface CourseListProps {
    items: ICollegeCourse[]
}

const CourseList: React.FC<CourseListProps> = props => {
    const { items } = props
    const paginationService = new PaginationService()
    const [config, setConfig] = useState({} as IPagination)

    useEffect(() => {
        setConfig({
            page: 1,
            pageSize: 12,
            collectionSize: items.length
        })
    }, [items])

    const filteredItems = paginationService.filter(
        items,
        config.page,
        config.pageSize
    )

    return (
        <>
            <Container>
                {filteredItems.map((item, index) => (
                    <Card key={index}>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle>{item.category.name}</CardSubtitle>
                    </Card>
                ))}
            </Container>

            <AppPaginator
                model={config}
                onPageChange={data => setConfig(data)}
            />
        </>
    )
}

export default CourseList
