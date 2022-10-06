import React from 'react'
import { Container, Content, Title } from './styles'
import AppBanner from '@/components/common/app-banner'

const EducationSegmentBanner: React.FC = () => {
    return (
        <Container paddingTop>
            <AppBanner>
                <Content>
                    <Title>Segmentos educacionais</Title>
                </Content>
            </AppBanner>
        </Container>
    )
}

export default EducationSegmentBanner
