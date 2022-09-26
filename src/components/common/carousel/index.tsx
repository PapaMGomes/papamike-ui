import React, { useEffect, useState } from 'react'
import { Container, Slide } from './styles'
import { useResponsivePerPage } from '@/hooks/slider'
import { Splide, SplideSlide, Options } from '@splidejs/react-splide'
import { IResponsiveItemsPerPage } from '@/interfaces/_slider.interface'

export interface OptionType extends Options {
    custom?: {
        perPageResponsive?: IResponsiveItemsPerPage
    }
}
interface CarouselProps {
    padding?: string
    options?: OptionType
    children: React.ReactNode
    perPageResponsive?: IResponsiveItemsPerPage
}

interface SlideContainerProps {
    children: React.ReactNode
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
    return (
        <SplideSlide>
            <Slide>{children}</Slide>
        </SplideSlide>
    )
}

const Carousel: React.FC<CarouselProps> = props => {
    const { options, children, padding } = props
    const [splideOptions, setSplideOptions] = useState<Options>({})

    const _getCleanOption = () => {
        const clone = Object.assign({}, options)
        delete clone.custom

        return clone
    }

    useEffect(() => {
        const clone = _getCleanOption()
        setSplideOptions({ ...clone, width: '100%' })
    }, [])

    useEffect(() => {
        const clone = _getCleanOption()
        setSplideOptions({ ...splideOptions, ...clone })
    }, [options])

    if (options?.custom?.perPageResponsive) {
        const perPage = useResponsivePerPage(options?.custom?.perPageResponsive)

        useEffect(() => {
            setSplideOptions({ ...splideOptions, perPage })
        }, [perPage])
    }

    return (
        <Container padding={padding}>
            <Splide options={splideOptions}>{children}</Splide>
        </Container>
    )
}

export default Carousel
