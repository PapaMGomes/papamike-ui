import React from 'react'
import { format } from 'date-fns'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Container, FooterContainer, Article, Icon, Text } from './styles'

const FooterDefault: React.FC = () => {
    const socialMedia = [
        {
            title: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/colegiopapamike/'
        },
        {
            title: 'Facebook',
            icon: <FaFacebookF />,
            link: 'https://www.facebook.com/colegiopapamike'
        },
        {
            title: 'YouTube',
            icon: <FaYoutube />,
            link: 'https://www.youtube.com/channel/UCYmUl00VwZ8ESN9KLuUgvIw'
        }
    ]

    const currentYear = format(new Date(), 'yyyy')
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <FooterContainer>
            <Container>
                <Article>
                    {socialMedia.map((item, index) => (
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
