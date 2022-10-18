import { UNITS } from '@/config/constants/unit.config'
import React from 'react'
import {
    ContainerWrapper,
    Container,
    Title,
    ItemsContainer,
    Card,
    Map,
    CardText,
    CardLink,
    CardTitle
} from './styles'

const ContactDetails: React.FC = () => {
    return (
        <ContainerWrapper>
            <Container>
                <Title>Unidades</Title>
                <ItemsContainer>
                    {UNITS.map((item, index) => (
                        <Card key={index}>
                            <Map src={item.mapURL} loading="lazy" />

                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.address}</CardText>
                            <CardText href={`tel:${item.telephone}`}>
                                {item.telephone}
                            </CardText>
                            <CardLink href={item.link} target="_blank">
                                Ver rotas
                            </CardLink>
                        </Card>
                    ))}
                </ItemsContainer>
            </Container>
        </ContainerWrapper>
    )
}

export default ContactDetails
