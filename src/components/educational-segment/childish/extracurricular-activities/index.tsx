import React from 'react'
import {
    ContainerWrapper,
    Container,
    Title,
    Content,
    Card,
    CardTitle,
    Text
} from './styles'

const ChildishExtracurricularActivities: React.FC = () => {
    const items = [
        {
            title: 'Projeto Bilíngue',
            description: `Propõe a introdução da Língua Inglesa desde a Educação Infantil, com metodologia ativa. O projeto bilíngue permite desenvolver projetos de imersão da língua inglesa, com aulas 3 vezes semanais, dosadas em 40 minutos. A metodologia ativa permite que o aluno se desenvolva através de atividades lúdicas como a músicas, jogos interativos, filmes, conversação, brincadeiras, projetos com datas comemorativas, entre outros.`
        },
        {
            title: 'Musicalização',
            description: `A música possui um papel importante na educação das crianças. Ela contribui para o desenvolvimento psicomotor, sócio afetivo, cognitivo e linguístico, além de ser facilitadora do processo de aprendizagem, por esta razão iniciamos nos anos iniciais da educação formal dos alunos.`
        },
        {
            title: 'Educação Física',
            description: `Colégio Papa Mike kids considera a disciplina de Educação Física um dos principais elementos da Educação Infantil, pois, por intermédio de conteúdos aplicados de forma lúdica e recreativa, possibilita à criança a construção do conhecimento.`
        },
        {
            title: 'Ballet/Hapikido',
            description: `O Colégio Papa Mike Kids entende que as danças e artes marciais na fase da educação infantil aprendem as noções de espaço, sequencia, padronização e uma conscientização do próprio corpo no emocional, social, estímulos e estímulos.`
        },
        {
            title: 'Hapikido',
            description: `Promover o equilíbrio físico, mental e espiritual do praticante, disciplina, respeito ao próximo, autoconfiança, autocontrole, formar pessoas dignas e conscientes para a convivência social harmônica, promover a saúde num todo e a defesa pessoal coreana.`
        },
        {
            title: 'Ballet',
            description: `O benefício emocional é um dos mais importantes pontos desta atividade, a dança é uma forma de expressão que ajuda a criança explorar os seus sentimentos, além de adquirir maior autoconfiança. Ajuda a desenvolver habilidades sociais como a tolerância e apreço pelos outros.`
        }
    ]

    return (
        <ContainerWrapper>
            <Container>
                <Title>Atividades</Title>

                <Content>
                    {items.map((item, index) => (
                        <Card key={index}>
                            <Title>{item.title}</Title>
                            <Text>{item.description}</Text>
                        </Card>
                    ))}
                </Content>
            </Container>
        </ContainerWrapper>
    )
}

export default ChildishExtracurricularActivities
