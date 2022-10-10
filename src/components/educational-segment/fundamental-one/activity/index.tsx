import React from 'react'
import { ContainerBlob } from '../styles'
import { Container, Title, Content, Card, CardTitle, Label } from './styles'

import GamesImg from '@/assets/images/activity/games.jpg'
import JazzImg from '@/assets/images/activity/jazz.jpg'
import MakerImg from '@/assets/images/activity/maker.jpg'
import GuitarImg from '@/assets/images/activity/guitar.jpg'
import HapkidoImg from '@/assets/images/activity/hapkido.jpg'
import ReadingImg from '@/assets/images/activity/reading.jpg'
import RoboticsImg from '@/assets/images/activity/robotics.jpg'
import CulturaInglesaImg from '@/assets/images/activity/cultura_inglesa.png'
import FinancialEducationImg from '@/assets/images/activity/financial_education.jpg'

const FundamentalOneActivity: React.FC = () => {
    const items = [
        {
            image: CulturaInglesaImg,
            isOptional: false,
            title: 'Projeto Bilíngue'
        },
        { image: MakerImg, isOptional: false, title: 'Espaço Maker' },
        {
            image: FinancialEducationImg,
            isOptional: false,
            title: 'Educação Financeira'
        },
        { image: ReadingImg, isOptional: false, title: 'Projeto Leitura' },
        { image: GamesImg, isOptional: false, title: 'Oficina de jogos' },
        { image: JazzImg, isOptional: true, title: 'Jazz' },
        { image: HapkidoImg, isOptional: true, title: 'Hapkidô' },
        { image: GuitarImg, isOptional: true, title: 'Violão' },
        { image: RoboticsImg, isOptional: true, title: 'Robótica' }
    ]

    return (
        <ContainerBlob>
            <Container>
                <Title>Atividades</Title>

                <Content>
                    {items.map((item, index) => (
                        <Card key={index} image={item.image}>
                            <CardTitle>{item.title}</CardTitle>
                            {item.isOptional && <Label>(Opcional)</Label>}
                        </Card>
                    ))}
                </Content>
            </Container>
        </ContainerBlob>
    )
}

export default FundamentalOneActivity
