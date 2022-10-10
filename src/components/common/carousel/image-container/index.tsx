import React from 'react'

import { Container, Checkbox, ImageLabel } from './styles'

interface ImageContainerProps {
    id: string | number
    children: React.ReactNode
}

const ImageContainer: React.FC<ImageContainerProps> = props => {
    const { id, children } = props
    const forName = `btnControl-${id}`

    return (
        <Container>
            <Checkbox type="checkbox" id={forName} />
            <ImageLabel htmlFor={forName}>{children}</ImageLabel>
        </Container>
    )
}

export default ImageContainer
