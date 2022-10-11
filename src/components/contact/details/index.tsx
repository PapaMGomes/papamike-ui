import React from 'react'
import {
    Container,
    Title,
    Text,
    Article,
    ItemsContainer,
    Card,
    Map,
    CardText,
    CardLink,
    CardTitle
} from './styles'
import WavesContainer from '@/components/common/waves-container'

const ContactDetails: React.FC = () => {
    const unitsAddress = [
        {
            name: 'Unidade I',
            telephone: '(11) 3685-2120',
            mapURL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.96656646725!2d-46.78076308502276!3d-23.533704884696565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0e4db2a367%3A0x36c1ec593fdc0f45!2sR.%20Minas%20Bogasian%2C%20350%20-%20Centro%2C%20Osasco%20-%20SP%2C%2006013-010!5e0!3m2!1spt-BR!2sbr!4v1665524665363!5m2!1spt-BR!2sbr`,
            link: `https://goo.gl/maps/BDjC3zpniXjEV4EP6`
        },
        {
            name: 'Unidade II',
            telephone: '(11) 3683-6114',
            link: `https://goo.gl/maps/hZVU5CpdkwCxAV9m8`,
            mapURL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0486247352273!2d-46.780498184517334!3d-23.530753466348894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff05613e5695%3A0xdca38c8b40907a7b!2sR.%20Natanael%20Tito%20Salmon%2C%2042%20-%20Centro%2C%20Osasco%20-%20SP%2C%2006016-075!5e0!3m2!1spt-BR!2sbr!4v1665524728203!5m2!1spt-BR!2sbr`
        },
        {
            name: 'Kids Santo Antônio',
            telephone: '(11) 3685-0234',
            link: `https://goo.gl/maps/gJ7W3Z981mTszTASA`,
            mapURL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7931205823365!2d-46.78376557596664!3d-23.539942124885382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0cde662533%3A0x5b0f9238ecd6dffc!2sAv.%20Santo%20Ant%C3%B4nio%2C%201430%20-%20Vila%20Osasco%2C%20Osasco%20-%20SP%2C%2006083-200!5e0!3m2!1spt-BR!2sbr!4v1665524779218!5m2!1spt-BR!2sbr`
        },
        {
            name: 'Kids Mutinga',
            telephone: '(11) 3603-3976',
            link: `https://goo.gl/maps/w25U4RJSAph8CB9x9`,
            mapURL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7817671547346!2d-46.77267368451783!3d-23.504368765376313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefeebd8b5aa23%3A0x10284804d5dbacf5!2sR.%20Selemita%2C%20202%20-%20Mutinga%2C%20Osasco%20-%20SP%2C%2006286-280!5e0!3m2!1spt-BR!2sbr!4v1665524835138!5m2!1spt-BR!2sbr`
        }
    ]

    return (
        <WavesContainer>
            <Container>
                <Title>Unidades</Title>

                <ItemsContainer>
                    {unitsAddress.map((item, index) => (
                        <Card key={index}>
                            <Map src={item.mapURL} loading="lazy" />

                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.telephone}</CardText>
                            <CardLink href={item.link} target="_blank">
                                Ver rotas
                            </CardLink>
                        </Card>
                    ))}
                </ItemsContainer>
            </Container>
        </WavesContainer>
    )
}

export default ContactDetails
