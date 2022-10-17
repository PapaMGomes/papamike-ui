import React from 'react'
import { format } from 'date-fns'
import { Container, FooterContainer, Article, Icon, Text } from './styles'
import { SOCIAL_NETWORK_ITEMS } from '@/contants/_social-network.constant'

const FooterDefault: React.FC = () => {
    const currentYear = format(new Date(), 'yyyy')
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <FooterContainer>
            <Container>
                <Article>
                    {SOCIAL_NETWORK_ITEMS.map((item, index) => (
                        <Icon
                            key={index}
                            title={item.title}
                            onClick={() => openURL(item.link)}
                        >
                            {item.icon}
                        </Icon>
                    ))}
                </Article>

                <Text>
                    {currentYear} © Direitos reservados a Colégio Papa Mike
                </Text>
            </Container>
        </FooterContainer>
    )
}

export default FooterDefault
