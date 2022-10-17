import React from 'react'
import { Container, Content, Title, Card, Icon } from './styles'
import { SOCIAL_NETWORK_ITEMS } from '@/contants/_social-network.constant'
import WavesContainer from '@/components/common/waves-container'

const SocialNetwork: React.FC = () => {
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <WavesContainer>
            <Container>
                <Title>Papa Mike nas redes</Title>
                <Content>
                    {SOCIAL_NETWORK_ITEMS.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            onClick={() => openURL(item.link)}
                        >
                            <Icon>{item.icon}</Icon>
                        </Card>
                    ))}
                </Content>
            </Container>
        </WavesContainer>
    )
}

export default SocialNetwork
