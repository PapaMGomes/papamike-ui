import React from 'react'
import Timeline from '@/components/common/timeline'
import { WraperContainer, Container, Title, Text } from './styles'

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
                    Acompanhando o progresso do município de Osasco, abriu vagas
                    para a o curso de Educação de Jovens e Adultos.
                </Text>
            )
        },
        {
            title: '2000',
            content: (
                <Text>
                    Foram iniciadas as atividades do nosso primeiro curso
                    técnico, com o curso de Enfermagem.
                </Text>
            )
        },
        {
            title: '2001',
            content: (
                <Text>
                    As primeiras turmas dos cursos técnicos em Radiologia,
                    Contabilidade e Administração foram formadas.
                </Text>
            )
        },
        {
            title: '2002',
            content: (
                <Text>
                    A identidade visual e a razão social do Colégio foram
                    modificadas, antes intituladas Papa Mike Cursos
                    Preparatórios, pois já não trabalhávamos somente com cursos
                    preparatórios, mas sim com cursos em diversos segmentos.
                </Text>
            )
        },
        {
            title: '2003',
            content: (
                <Text>
                    A pedido de pais e alunos, iniciamos o ensino Fundamental e
                    o Médio.
                </Text>
            )
        },
        {
            title: '2008',
            content: (
                <Text>
                    Foi montada a primeira turma do curso técnico em Segurança
                    do Trabalho.
                </Text>
            )
        },
        {
            title: '2009',
            content: (
                <Text>
                    Inauguramos e inovamos com a primeira unidade do Papa Mike
                    Kids, localizado no Centro de Osasco.
                </Text>
            )
        },
        {
            title: '2013',
            content: (
                <Text>
                    Abrimos a segunda unidade do Papa Mike Kids, localizada na
                    região Jardim Mutinga, em Osasco. Iniciamos também o nosso
                    Polo de Faculdade, com a Anhanguera EAD - Osasco. Oferecendo
                    cursos de Graduação e Pós-Graduação.
                </Text>
            )
        },
        {
            title: '2018',
            content: (
                <Text>
                    Abrimos a segunda unidade do Papa Mike Kids, localizada na
                    região Jd. Mutinga, em Osasco.
                </Text>
            )
        },
        {
            title: '2020',
            content: (
                <Text>
                    Em meados de Março, devido a pandemia causada pela Covid-19,
                    nossas unidades precisaram ser fechadas, comprometendo
                    assim, o ensino presencial de nossos alunos. Rapidamente,
                    por meio do ensino remoto, trouxemos a solução para
                    contornar esse problema e acima de tudo conseguimos manter
                    nossos padrões de qualidade e excelência nos ensinos. Em um
                    momento tão delicado para a educação, a equipe Papa Mike
                    continua se esforçando cada vez mais para contribuir na
                    formação de nossos alunos!
                </Text>
            )
        },
        {
            title: '2023',
            content: (
                <Text>
                    Durante essa linha cronológica o Colégio Papa Mike tem se
                    mantido fiel à sua filosofia, com uma visão completa e
                    desenvolver o aprendizado e o caráter do aluno, por meio de
                    conteúdos que contemplam a formação de um cidadão
                    empreendedor, ético, solidário e preparado para a vida
                    pessoal e profissional. Com uma educação voltada à vida e à
                    empregabilidade.
                </Text>
            )
        }
    ]

    return (
        <WraperContainer>
            <Container>
                <Title>Nossa Historia</Title>
                <Timeline items={items} />
            </Container>
        </WraperContainer>
    )
}

export default OurStory
