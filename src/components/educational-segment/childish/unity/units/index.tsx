import React from 'react'
import { FaRoute } from 'react-icons/fa'
import { AiFillCamera } from 'react-icons/ai'
import { IUnit } from '@/interfaces/unit.interface'
import CentroFacade from '@/assets/images/units/centro/facade.png'
import MutingaFacade from '@/assets/images/units/mutinga/facade.png'
import {
    Container,
    Card,
    ImageContainer,
    CardContent,
    Image,
    Link,
    Title,
    Text,
    Map
} from './styles'
import { CENTRO_IMAGES, MUTINGA_IMAGES } from '@/config/gallery/unit.gallery'

interface UnitProps {
    onSelect: (unit: IUnit) => void
}

const Units: React.FC<UnitProps> = props => {
    const { onSelect } = props
    const items: IUnit[] = [
        {
            image: CentroFacade,
            slidesImage: CENTRO_IMAGES,
            name: 'Papa Mike Kids Centro',
            mapLink: 'https://goo.gl/maps/gjmjbDjKasbggkTz7',
            address: 'R. Minas Bogasian, 228 - Centro, Osasco - SP, 06013-010',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1829.0023363746693!2d-46.77909424189469!3d-23.53233434617434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff6f9cc35599%3A0xe7143db01dc4fa9a!2sPapa%20Mike%20Kids%20Centro!5e0!3m2!1spt-BR!2sbr!4v1665170355059!5m2!1spt-BR!2sbr'
        },
        {
            image: MutingaFacade,
            slidesImage: MUTINGA_IMAGES,
            name: 'Papa Mike Kids Mutinga',
            mapLink: 'https://goo.gl/maps/XgdDRYo17FUYbSKY6',
            address: 'R. Selemita, 202 - Mutinga, Osasco - SP, 06286-280',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.781630535215!2d-46.77267368502339!3d-23.504373684711243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff678d1f95a5%3A0x92c6ba3174e880a5!2sPapa%20Mike%20Kids%20Mutinga!5e0!3m2!1spt-BR!2sbr!4v1665170601125!5m2!1spt-BR!2sbr'
        }
    ]

    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <Container>
            {items.map((item, index) => (
                <Card key={index}>
                    <ImageContainer>
                        <Image src={item.image} alt={item.name} />
                        <Link onClick={() => onSelect(item)}>
                            Galeria
                            <AiFillCamera />
                        </Link>
                    </ImageContainer>

                    <CardContent>
                        <Title>{item.name}</Title>
                        <Text>{item.address}</Text>

                        <Link onClick={() => openURL(item.mapLink)}>
                            Ver rotas
                            <FaRoute />
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </Container>
    )
}

export default Units
