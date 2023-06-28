import React from 'react'
import AppHead from '@/components/common/app-head'
import { FaRoute, FaWhatsapp } from 'react-icons/fa'
import { UNITS } from '@/config/constants/unit.config'
import {
    Card,
    Link,
    Image,
    Title,
    Content,
    CardText,
    Container,
    CardTitle,
    CardFooter
} from '@/styles/pages/unit'

const Unit: React.FC = () => {
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <>
            <AppHead title="Unidades" />

            <Container paddingTop>
                <Title>Unidades</Title>

                <Content>
                    {UNITS.map((item, index) => (
                        <Card key={index}>
                            <Image src={item.image} />
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.address}</CardText>

                            <CardFooter>
                                {/* <Link onClick={() => openURL(item.link)}>
                                    Saiba mais
                                    <FaWhatsapp />
                                </Link> */}

                                <Link onClick={() => openURL(item.link)}>
                                    Ver rotas
                                    <FaRoute />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </Content>
            </Container>
        </>
    )
}

export default Unit
