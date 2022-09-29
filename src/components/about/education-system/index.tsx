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
            title: 'Sistema Maxi',
            animation: 'backInLeft',
            link: `https://sistemamaxi.com.br/`,
            subtitle: 'Ensino Infantil ao Fundamental II',
            description: `Com mais de 30 anos de experiência, referência em educação no Brasil. Com uma proposta inovadora e exclusiva baseada na Pedagogia Afetiva, o Sistema Maxi de Ensino privilegia uma educação de qualidade que valoriza as interações humanas.`
        },
        {
            title: 'Sistema Bernoulli',
            subtitle: 'Ensino Médio',
            animation: 'backInRight',
            link: `https://www.bernoulli.com.br/sistema-de-ensino/sobre-nos/`,
            description: `Com uma proposta inovadora e exclusiva, o Bernoulli é hoje um dos principais grupos educacionais do Brasil. Com livros atualizados anualmente, através de uma abordagem fluida, com temas relevantes que ajudam o estudante a desenvolver o pensamento crítico, além de uma postura cidadã e consciente.`
        }
    ]

    return (
        <WraperContainer>
            <Container>
                <ScrollAnimation animation="backInLeft">
                    <Title>
                        Contamos com a parceira de dois sistemas de ensino
                    </Title>
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
