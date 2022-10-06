import React from 'react'
import { Container, Content, Title } from './styles'
import AppBanner from '@/components/common/app-banner'

const ChildishBanner: React.FC = () => {
    return (
        <Container paddingTop>
            <AppBanner>
                <Content>
                    <Title>Educação Infantil</Title>
                </Content>
            </AppBanner>
        </Container>
    )
}

export default ChildishBanner
