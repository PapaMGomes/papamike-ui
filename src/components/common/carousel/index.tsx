import React, { useEffect, useState } from 'react'
import { Container, Slide } from './styles'
import { useResponsivePerPage } from '@/hooks/slider'
import { Splide, SplideSlide, Options } from '@splidejs/react-splide'
import { IResponsiveItemsPerPage } from '@/interfaces/_slider.interface'
import ImageContainer from './image-container'
export interface OptionType extends Options {
    custom?: {
        perPageResponsive?: IResponsiveItemsPerPage
    }
}
interface CarouselProps {
    padding?: string
    options?: OptionType
    children: React.ReactNode
    onMoved?: (arg: any) => void
    perPageResponsive?: IResponsiveItemsPerPage
}
interface SlideContainerProps {
    children: React.ReactNode
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
    return (
        <SplideSlide>
            <Slide>{children}</Slide>
        </SplideSlide>
    )
}

const Carousel: React.FC<CarouselProps> = props => {
    const { options, children, padding, onMoved } = props
    const [splideOptions, setSplideOptions] = useState<Options>({})
    const perPage = useResponsivePerPage(options?.custom?.perPageResponsive)

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

    useEffect(() => {
        const isEmpty = !!!Object.keys(splideOptions).length
        const enableCheck = !!options?.custom?.perPageResponsive

        if (isEmpty || !enableCheck) return
        setSplideOptions({ ...splideOptions, perPage })
    }, [perPage])

    return (
        <Container padding={padding}>
            <Splide
                options={{ ...options, ...splideOptions }}
                onMoved={(...arg) => onMoved && onMoved(arg)}
            >
                {children}
            </Splide>
        </Container>
    )
}

export default Carousel
export { ImageContainer, SlideContainer }
