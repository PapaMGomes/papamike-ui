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
            title: 'Projeto Bilíngue - Cultura Inglesa',
            description: `Propõe a introdução da Língua Inglesa desde a Educação Infantil, com metodologia ativa. O projeto bilíngue permite desenvolver projetos de imersão da língua inglesa, com aulas 3 vezes semanais, dosadas em 40 minutos. A metodologia ativa permite que o aluno se desenvolva através de atividades lúdicas como a músicas, jogos interativos, filmes, conversação, brincadeiras, projetos com datas comemorativas, entre outros.

            A Plataforma Bilíngue Cultura Inglesa é uma solução intracurricular para as escolas regulares que buscam proporcionar aos seus alunos uma formação bilíngue de verdade, da Educação Infantil ao Ensino Médio. Com ampla oferta de carga horária, conteúdos e recursos, você tem flexibilidade para deixar a Plataforma Bilíngue do jeito que a sua escola precisa, sempre com a excelência de uma metodologia de ensino reconhecida e premiada há mais de 87 anos, alinhada às diretrizes da Base Nacional Comum Curricular e habilidades do século XXI.
            `
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
            title: 'Hapkidô',
            description: `Promover o equilíbrio físico, mental e espiritual do praticante, disciplina, respeito ao próximo, autoconfiança, autocontrole, formar pessoas dignas e conscientes para a convivência social harmônica, promover a saúde num todo e a defesa pessoal coreana.`
        },
        {
            image: BalletImg,
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
