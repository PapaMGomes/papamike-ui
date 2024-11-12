import ScrollAnimation from '@/components/common/scroll-animation'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import {
    WraperContainer,
    Container,
    Title,
    Text,
    Card,
    Link,
    Content,
    CardTitle,
    CardSubtitle
} from './styles'

const EducationSystem: React.FC = () => {
    const items = [
        {
            title: 'Sistema Bernoulli',
            subtitle: 'Kids ao Fundamental I',
            animation: 'fadeInUp',
            link: `https://www.bernoulli.com.br/sistema-de-ensino/sobre-nos/`,
            description: `Com uma proposta inovadora e exclusiva, o Bernoulli é um dos principais grupos educacionais do Brasil. Seus livros, atualizados anualmente, proporcionam uma abordagem fluida e abordam temas relevantes que ajudam os estudantes a desenvolver o pensamento crítico, além de fomentar uma postura cidadã e consciente.`
        },
        {
            title: 'Sistema Amplia',
            animation: 'fadeInUp',
            link: `https://somoseducacao.com.br/sistemaAmplia.php`,
            subtitle: 'Fundamental II ao Ensino Médio',
            description: `Com uma abordagem moderna e centrada no aluno, o Amplia é uma solução educacional inovadora desenvolvida pelo grupo Somos Educação. Com conteúdos atualizados e uma metodologia que integra tecnologia e personalização, o Amplia oferece uma experiência de aprendizado dinâmica, estimulando o desenvolvimento de habilidades críticas e a autonomia dos estudantes, ao mesmo tempo que apoia professores com ferramentas e recursos pedagógicos de excelência.`
        }
    ]

    return (
        <WraperContainer>
            <Container>
                <ScrollAnimation animation="backInLeft">
                    <Title>Sistemas de ensino</Title>
                </ScrollAnimation>

                <Content>
                    {items.map((item, index) => (
                        <ScrollAnimation key={index} animation={item.animation}>
                            <Card>
                                <CardTitle>{item.title}</CardTitle>
                                <CardSubtitle>{item.subtitle}</CardSubtitle>

                                <Text>{item.description}</Text>

                                <Link href={item.link} target="_blank">
                                    ver mais
                                    <BsArrowRight />
                                </Link>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </Content>
            </Container>
        </WraperContainer>
    )
}

export default EducationSystem
