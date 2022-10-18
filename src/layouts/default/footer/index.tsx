import React from 'react'
import { format } from 'date-fns'
import Logo from '@/assets/images/logo.png'
import { UNITS } from '@/config/constants/unit.config'
import { RECIPIENT_CONTACT } from '@/config/constants/email.config'
import { SOCIAL_NETWORK_ITEMS } from '@/contants/_social-network.constant'
import {
    ContactContainer,
    FooterContainer,
    ItemsContainer,
    Container,
    Content,
    Strong,
    Image,
    Icon,
    Span,
    Link,
    Text
} from './styles'

const FooterDefault: React.FC = () => {
    const currentYear = format(new Date(), 'yyyy')
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <FooterContainer>
            <Container>
                <Content>
                    <ItemsContainer>
                        {SOCIAL_NETWORK_ITEMS.map((item, index) => (
                            <Icon
                                key={index}
                                title={item.title}
                                onClick={() => openURL(item.link)}
                            >
                                {item.icon}
                            </Icon>
                        ))}
                    </ItemsContainer>

                    <ContactContainer>
                        <Strong>Contato</Strong>
                        {UNITS.map((item, index) => (
                            <Link key={index} href={`tel:${item.telephone}`}>
                                {item.name} - {item.telephone}
                            </Link>
                        ))}

                        <Link href={`mailto:${RECIPIENT_CONTACT}`}>
                            Email - {RECIPIENT_CONTACT}
                        </Link>
                    </ContactContainer>

                    <Image src={Logo} />
                </Content>
            </Container>

            <Span>{currentYear} © Direitos reservados a Colégio Papa Mike</Span>
        </FooterContainer>
    )
}

export default FooterDefault
