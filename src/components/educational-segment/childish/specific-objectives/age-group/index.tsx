import React, { useState } from 'react'
import {
    ContainerWrapper,
    Container,
    Text,
    Title,
    ItemsGroup,
    Card,
    CardTitle,
    CardSubtitle,
    Content
} from './styles'

const ChildishAgeGroup: React.FC = () => {
    const items = [
        {
            id: 1,
            title: 'Berçário ',
            subTitle: '(04 meses a 2 anos)',
            content: (
                <Text>
                    Contamos com especialistas no desenvolvimento de crianças de
                    quatro meses a dois anos idade, que desenvolvem um trabalho
                    minucioso de estimulação da aprendizagem cognitiva, social e
                    motora. Acolher, cuidar, estimular, divertir, desenvolver,
                    descobrir, aconchegar, sorrir, interagir e respeitar são
                    ações que norteiam nosso trabalho no berçário.
                </Text>
            )
        },
        {
            id: 2,
            title: 'Maternal ',
            subTitle: '(2 anos)',
            content: (
                <Text>
                    O trabalho continua com estimulação e desenvolvimento das
                    habilidades comunicativas e corporais, sociais e motoras,
                    possibilitando ao aluno expressar e verbalizar suas ideias,
                    sentimentos e necessidades, como princípio básico para uma
                    boa convivência.
                </Text>
            )
        },
        {
            id: 3,
            title: 'Maternal ',
            subTitle: '(3 anos)',
            content: (
                <Text>
                    Neste período a criança passa a oferecer subsídios para o
                    trabalho de competências sociais e de convívio, desta forma
                    o Colégio Papa Mike intensifica o trabalho da pedagogia
                    afetiva desenvolvendo trabalhos em grupos, percepção do
                    coletivo, do compartilhar, é também um importante período
                    para o desenvolvimento da representação sensório-motor e
                    para a resolução de problemas, inerentes a realidade desta
                    faixa etária.
                </Text>
            )
        },
        {
            id: 4,
            title: 'Educação Infantil',
            subTitle: '(4 a 5 anos)',
            content: (
                <Text>
                    Este período é estimulado o autoconhecimento e continua os
                    trabalhamos de convivência em grupo, cognitivamente são
                    aprimorados as representações sensório-motor, os alunos são
                    estimulados em resolver de problemas do seu cotidiano, de
                    convívio com o gruo e para o desenvolvido do pensamento
                    lógico. Trabalhamos com metodologias participativas
                    (interacionistas) que oportunizam os alunos a criarem
                    soluções lógicas aos problemas propostos.
                </Text>
            )
        }
    ]

    const initialItem = items[0]
    const [currentItem, setCurrentItem] = useState(initialItem)

    return (
        <ContainerWrapper>
            <Container>
                <ItemsGroup>
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            isActive={item.id === currentItem.id}
                            onMouseEnter={() => setCurrentItem(item)}
                        >
                            <CardTitle>{item.title}</CardTitle>
                            <CardSubtitle>{item.subTitle}</CardSubtitle>
                        </Card>
                    ))}
                </ItemsGroup>
                <Content>
                    <Title>
                        {currentItem.title} - {currentItem.subTitle}{' '}
                    </Title>
                    {currentItem.content}
                </Content>
            </Container>
        </ContainerWrapper>
    )
}

export default ChildishAgeGroup
