import React, { ReactNode } from 'react'
import { Container, Content } from './styles'

export interface AppBannerProps {
    children: ReactNode
    bgImage?: string
}

const AppBanner: React.FC<AppBannerProps> = props => {
    const { children, bgImage } = props

    return (
        <Container bgImage={bgImage}>
            <Content>{children}</Content>
        </Container>
    )
}

export default AppBanner
