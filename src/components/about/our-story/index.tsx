import React from 'react'
import { WraperContainer, Container, Title, Text } from './styles'
import VerticalTimeline from '@/components/common/vertical-timeline'

const OurStory: React.FC = () => {
    const items = [
        {
            title: '1996',
            content: (
                <Text>
                    A história do Colégio Papa Mike teve início com os cursos
                    preparatórios para as Polícias Federal, Militar, Civil e
                    Forças Armadas.
                </Text>
            )
        },
        {
            title: '1998',
            content: (
                <Text>
                    Acompanhando o crescimento e progresso de Osasco, passamos a
                    oferecer o curso de Educação de Jovens e Adultos (EJA).
                </Text>
            )
        },
        {
            title: '2000',
            content: (
                <Text>
                    Lançamento do nosso primeiro curso técnico: Técnico em
                    Enfermagem.
                </Text>
            )
        },
        {
            title: '2001',
            content: (
                <Text>
                    Formamos as primeiras turmas dos cursos técnicos em
                    Radiologia, Contabilidade e Administração.
                </Text>
            )
        },
        {
            title: '2002',
            content: (
                <Text>
                    Mudamos nossa identidade visual e razão social, deixando de
                    ser "Papa Mike Cursos Preparatórios" para refletir nossa
                    expansão para diversas áreas do ensino.
                </Text>
            )
        },
        {
            title: '2003',
            content: (
                <Text>
                    Atendendo aos pedidos de pais e alunos, iniciamos o Ensino
                    Fundamental e o Ensino Médio.
                </Text>
            )
        },
        {
            title: '2005',
            content: (
                <Text>
                    Com o passar dos anos, fortalecemos nossa tradição e
                    formamos milhares de alunos em Osasco.
                </Text>
            )
        },
        {
            title: '2008',
            content: (
                <Text>
                    Implantamos o curso técnico em Segurança do Trabalho.
                </Text>
            )
        },
        {
            title: '2009',
            content: (
                <Text>
                    Inovamos e inauguramos a primeira unidade do Papa Mike Kids,
                    no Centro de Osasco, focada na Educação Infantil.
                </Text>
            )
        },
        {
            title: '2013',
            content: (
                <Text>
                    Expandimos com a segunda unidade do Papa Mike Kids, na
                    região do Jardim Mutinga, em Osasco. Também iniciamos nosso
                    polo de ensino superior, em parceria com a Anhanguera EAD,
                    oferecendo cursos de Graduação e Pós-graduação.
                </Text>
            )
        },
        {
            title: '2019',
            content: (
                <Text>
                    Seguimos firmes na missão de educar e formar vencedores,
                    contribuindo significativamente para o futuro de nossos
                    jovens.
                </Text>
            )
        },
        {
            title: '2020',
            content: (
                <Text>
                    Com a chegada da pandemia da Covid-19, adaptamos rapidamente
                    nosso ensino para o modelo remoto, garantindo a continuidade
                    da aprendizagem com qualidade e comprometimento, mesmo em
                    tempos desafiadores.
                </Text>
            )
        },
        {
            title: '2025',
            content: (
                <Text>
                    O Colégio Papa Mike promove uma educação inovadora e voltada
                    para a vida e a empregabilidade, desenvolvendo o
                    aprendizado, o caráter e a formação de cidadãos éticos,
                    solidários e preparados para os desafios do mundo moderno.
                </Text>
            )
        }
    ]

    return (
        <WraperContainer>
            <Container>
                <Title>Nossa História</Title>
                <VerticalTimeline items={items} />
            </Container>
        </WraperContainer>
    )
}

export default OurStory
