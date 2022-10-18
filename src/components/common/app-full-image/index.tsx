import React, { useEffect, useRef } from 'react'
import { Container, Image } from './styles'

interface AppFullImageProps {
    image: string
    isOpen: boolean
    onBackdropClick?: Function
}

const AppFullImage: React.FC<AppFullImageProps> = props => {
    const { image, isOpen, onBackdropClick } = props
    const backdropEl = useRef(null)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    const handleBackdropClick = (element: EventTarget) => {
        const isBackdrop = element === backdropEl.current
        if (!isBackdrop || !onBackdropClick) return

        onBackdropClick()
    }

    return (
        <>
            {isOpen && (
                <Container
                    ref={backdropEl}
                    onClick={({ target }) => handleBackdropClick(target)}
                >
                    <Image src={image} />
                </Container>
            )}
        </>
    )
}

export default AppFullImage
