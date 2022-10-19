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
    Article,
    Strong,
    Image,
    Icon,
    Span,
    Link,
    Text
} from './styles'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'

const FooterDefault: React.FC = () => {
    const currentYear = format(new Date(), 'yyyy')
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <FooterContainer>
            <Container>
                <Content>
                    <Article>
                        {UNITS.map((item, index) => (
                            <ContactContainer key={index}>
                                <Strong>{item.name}</Strong>

                                <Link href={item.link} target="_blank">
                                    <FaMapMarkerAlt />
                                    {item.address}
                                </Link>

                                <Link href={`tel:${item.telephone}`}>
                                    <BsFillTelephoneOutboundFill />
                                    {item.telephone}
                                </Link>
                            </ContactContainer>
                        ))}
                    </Article>

                    <Article>
                        <Image src={Logo} />

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
                    </Article>
                </Content>
            </Container>

            <Span>{currentYear} © Direitos reservados a Colégio Papa Mike</Span>
        </FooterContainer>
    )
}

export default FooterDefault
