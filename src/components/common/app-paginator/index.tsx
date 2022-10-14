import React, { useEffect, useState } from 'react'
import { Container, Text, Button } from './styles'
import { IPagination } from '@/interfaces/_app-pagination.interface'
import {
    BsChevronLeft,
    BsChevronRight,
    BsChevronDoubleLeft,
    BsChevronDoubleRight
} from 'react-icons/bs'

interface AppPaginatorProps {
    model: IPagination
    onPageChange: (config: IPagination) => void
}

const AppPaginator: React.FC<AppPaginatorProps> = props => {
    const { onPageChange, model } = props
    const [config, setConfig] = useState({} as IPagination)

    const totalPages = Math.ceil(config.collectionSize / config.pageSize)

    const linesPerPage = () => {
        const { collectionSize, pageSize, page } = config

        const final = page * pageSize
        const initial = (page - 1) * pageSize

        return `${!initial ? 1 : initial} - ${
            final > collectionSize ? collectionSize : final
        }`
    }

    useEffect(() => {
        setConfig(model)
    }, [model])

    const handlePageChange = (model: IPagination) => {
        onPageChange(model)
    }

    const prevAll = () => handlePageChange({ ...config, page: 1 })
    const nextAll = () => handlePageChange({ ...config, page: totalPages })

    const prevPage = () => {
        if (!(config.page - 1)) return
        handlePageChange({ ...config, page: config.page - 1 })
    }

    const nextPage = () => {
        if (config.page === totalPages) return
        handlePageChange({ ...config, page: config.page + 1 })
    }

    return (
        <Container>
            <Button onClick={prevAll}>
                <BsChevronDoubleLeft />
            </Button>
            <Button onClick={prevPage}>
                <BsChevronLeft />
            </Button>

            <Text>
                {linesPerPage()} de {config.collectionSize}
            </Text>

            <Button onClick={nextPage}>
                <BsChevronRight />
            </Button>
            <Button onClick={nextAll}>
                <BsChevronDoubleRight />
            </Button>
        </Container>
    )
}

export default AppPaginator
