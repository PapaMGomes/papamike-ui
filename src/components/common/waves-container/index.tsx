import React from 'react'
import { Container, Waves } from './styles'

interface WavesContainerProps {
    children: React.ReactNode
    topWaves?: string
}

const WavesContainer: React.FC<WavesContainerProps> = props => {
    const { children, topWaves } = props

    return (
        <Container>
            <Waves style={{ bottom: topWaves || '93%' }} />
            {children}
        </Container>
    )
}

export default WavesContainer
