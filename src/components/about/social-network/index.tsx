import React from 'react'
import WavesContainer from '@/components/common/waves-container'
import { SOCIAL_NETWORK_ITEMS } from '@/contants/_social-network.constant'
import { Container, Content, Title, Card, Icon, Image } from './styles'
import ScrollAnimation from '@/components/common/scroll-animation'

const SocialNetwork: React.FC = () => {
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <WavesContainer>
            <Container>
                <ScrollAnimation animation="fadeInUp">
                    <Title>Papa Mike nas redes sociais</Title>
                    <Content>
                        {SOCIAL_NETWORK_ITEMS.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                onClick={() => openURL(item.link)}
                            >
                                <Icon>{item.icon}</Icon>
                                <Image src={item.logo} />
                            </Card>
                        ))}
                    </Content>
                </ScrollAnimation>
            </Container>
        </WavesContainer>
    )
}

export default SocialNetwork
