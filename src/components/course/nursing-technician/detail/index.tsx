import React from 'react'
import { GiSpellBook } from 'react-icons/gi'
import { Container, Card, Icon, Text } from './styles'
import {
    FaChalkboardTeacher,
    FaHandshake,
    FaHospitalUser
} from 'react-icons/fa'

const NursingTechnicianDetail: React.FC = () => {
    const items = [
        { icon: <FaHandshake />, text: `Curso Autorizado pelo MEC` },
        { icon: <GiSpellBook />, text: `Conceitos pedagógicos modernos` },
        { icon: <FaHospitalUser />, text: `Programa de estagios` },
        {
            icon: <FaChalkboardTeacher />,
            text: `Professors especializados nos conteúdos`
        }
    ]

    return (
        <Container>
            {items.map((item, index) => (
                <Card key={index}>
                    <Icon>{item.icon}</Icon>
                    <Text>{item.text}</Text>
                </Card>
            ))}
        </Container>
    )
}

export default NursingTechnicianDetail
