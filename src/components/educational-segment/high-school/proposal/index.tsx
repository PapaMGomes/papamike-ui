import React from 'react'
import { VscGraphLine } from 'react-icons/vsc'
import { AiFillDashboard } from 'react-icons/ai'
import { GiModernCity, GiNotebook, GiPodiumWinner } from 'react-icons/gi'
import {
    Container,
    Title,
    Text,
    ItemsContainer,
    Card,
    Icon,
    CardText
} from './styles'

const HighSchoolProposal: React.FC = () => {
    const items = [
        { icon: <GiNotebook />, title: 'Simulados ENEM' },
        { icon: <AiFillDashboard />, title: 'Resultados' },
        {
            icon: <GiModernCity />,
            title: 'Plataformas digitais modernas e integradas'
        },
        {
            icon: <GiPodiumWinner />,
            title: '1º lugar do Brasil no ENEM pela 6º vez'
        },
        {
            icon: <VscGraphLine />,
            title: 'Top 10 nacional por 14 anos consecutivos'
        }
    ]

    return (
        <Container>
            <Title>Proposta Pedagógica</Title>

            <Text>
                Baseados na visão interacionista com foco na pedagogia afetiva
                são propostas atividades para o desenvolvimento do caráter
                humano, através de conteúdos que contemplam a imersão como
                cidadão empreendedor, ético e solidário.{' '}
            </Text>
            <Text>
                O Ensino Médio tem foco na preparação do aluno para ingresso nas
                melhores universidades do país, principalmente porque propõe
                atividades que preparam o aluno para bons resultados nos
                vestibulares e nas provas do ENEM.
            </Text>
            <Text>
                Com uma proposta inovadora e exclusiva, o Bernoulli Sistema de
                Ensino é hoje um dos principais grupos educacionais do Brasil.
                Com livros atualizados anualmente, através de uma abordagem
                fluida, com temas relevantes que ajudam o estudante a
                desenvolver o pensamento crítico, além de uma postura cidadã e
                consciente.
            </Text>

            <ItemsContainer>
                {items.map((item, index) => (
                    <Card key={index}>
                        <Icon>{item.icon}</Icon>
                        <CardText>{item.title}</CardText>
                    </Card>
                ))}
            </ItemsContainer>
        </Container>
    )
}

export default HighSchoolProposal
