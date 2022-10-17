import React from 'react'
import { FaRoute } from 'react-icons/fa'
import { AiFillCamera } from 'react-icons/ai'
import { IUnit } from '@/interfaces/unit.interface'
import CentroFacade from '@/assets/images/units/centro/facade.jpeg'
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
            name: 'Papa Kids Santo Antônio',
            mapLink: 'https://goo.gl/maps/gJ7W3Z981mTszTASA',
            address: 'Av. Santo Antônio, 1430 - Vila Osasco, Osasco - SP',
            mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7931205823365!2d-46.78376557596664!3d-23.539942124885382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0cde662533%3A0x5b0f9238ecd6dffc!2sAv.%20Santo%20Ant%C3%B4nio%2C%201430%20-%20Vila%20Osasco%2C%20Osasco%20-%20SP%2C%2006083-200!5e0!3m2!1spt-BR!2sbr!4v1665524779218!5m2!1spt-BR!2sbr`
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
