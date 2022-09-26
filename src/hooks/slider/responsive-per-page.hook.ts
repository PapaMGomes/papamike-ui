import { WINDOW_BREAKPOINTS } from '@/contants/window-breakpoints.constant'
import { IResponsiveItemsPerPage } from '@/interfaces/_slider.interface'
import useWindowDimensions from '@/hooks/window-dimentions.hook'
import { useEffect, useState } from 'react'

const useResponsivePerPage = (options: IResponsiveItemsPerPage) => {
    const { width } = useWindowDimensions()
    const [result, setResult] = useState<number>()

    useEffect(() => {
        if (!width) return

        const { sm, md, lg, xl } = WINDOW_BREAKPOINTS

        if (width <= sm) setResult(options.sm)
        else if (width > sm && width <= md) setResult(options.md)
        else if (width > md && width <= lg) setResult(options.lg)
        else if (width > lg && width <= xl) setResult(options.lg)
        else if (width > xl) setResult(options.xl)
    }, [width])

    return result
}

export default useResponsivePerPage
