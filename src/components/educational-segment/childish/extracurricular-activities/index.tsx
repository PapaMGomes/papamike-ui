import React from 'react'
import {
    ContainerWrapper,
    Container,
    Title,
    Content,
    Card,
    CardTitle,
    CardContent,
    CardImage,
    Text
} from './styles'

import KidsImg from '@/assets/images/activity/kids.jpg'
import SportImg from '@/assets/images/activity/sport.jpg'
import GuitarImg from '@/assets/images/activity/guitar.jpg'
import BalletImg from '@/assets/images/activity/ballet.jpg'
import HapkidoImg from '@/assets/images/activity/hapkido.jpg'
import CulturaInglesaImg from '@/assets/images/cultura_inglesa.jpg'
import ScrollAnimation from '@/components/common/scroll-animation'

const ChildishExtracurricularActivities: React.FC = () => {
    const items = [
        {
            image: CulturaInglesaImg,
            title: 'Projeto Bilíngue',
            description: `Propõe a introdução da Língua Inglesa desde a Educação Infantil, com metodologia ativa. O projeto bilíngue permite desenvolver projetos de imersão da língua inglesa, com aulas 3 vezes semanais, dosadas em 40 minutos. A metodologia ativa permite que o aluno se desenvolva através de atividades lúdicas como a músicas, jogos interativos, filmes, conversação, brincadeiras, projetos com datas comemorativas, entre outros.`
        },
        {
            image: GuitarImg,
            title: 'Musicalização',
            description: `A música possui um papel importante na educação das crianças. Ela contribui para o desenvolvimento psicomotor, sócio afetivo, cognitivo e linguístico, além de ser facilitadora do processo de aprendizagem, por esta razão iniciamos nos anos iniciais da educação formal dos alunos.`
        },
        {
            image: SportImg,
            title: 'Educação Física',
            description: `Colégio Papa Mike kids considera a disciplina de Educação Física um dos principais elementos da Educação Infantil, pois, por intermédio de conteúdos aplicados de forma lúdica e recreativa, possibilita à criança a construção do conhecimento.`
        },

        {
            image: HapkidoImg,
            title: 'Hapikido',
            description: `Promover o equilíbrio físico, mental e espiritual do praticante, disciplina, respeito ao próximo, autoconfiança, autocontrole, formar pessoas dignas e conscientes para a convivência social harmônica, promover a saúde num todo e a defesa pessoal coreana.`
        },
        {
            image: BalletImg,
            title: 'Ballet',
            description: `O benefício emocional é um dos mais importantes pontos desta atividade, a dança é uma forma de expressão que ajuda a criança explorar os seus sentimentos, além de adquirir maior autoconfiança. Ajuda a desenvolver habilidades sociais como a tolerância e apreço pelos outros.`
        },
        {
            image: KidsImg,
            title: 'Ballet/Hapikido',
            description: `O Colégio Papa Mike Kids entende que as danças e artes marciais na fase da educação infantil aprendem as noções de espaço, sequencia, padronização e uma conscientização do próprio corpo no emocional, social, estímulos e estímulos.`
        }
    ]

    return (
        <ContainerWrapper>
            <Container>
                <Title>Atividades</Title>

                <Content>
                    {items.map((item, index) => (
                        <ScrollAnimation key={index} animation="fadeInUp">
                            <Card>
                                <CardImage src={item.image} />
                                <CardContent>
                                    <CardTitle>{item.title}</CardTitle>
                                    <Text>{item.description}</Text>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </Content>
            </Container>
        </ContainerWrapper>
    )
}

export default ChildishExtracurricularActivities
