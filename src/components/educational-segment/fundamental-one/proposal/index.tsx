import React from 'react'
import { ContainerHeaven } from '../styles'
import { Container, Title, Text, Bold } from './styles'

const FundamentalOneProposal: React.FC = () => {
    return (
        <ContainerHeaven>
            <Container>
                <Title>Proposta Pedagógica</Title>

                <Text>
                    <Bold>Colégio Papa Mike</Bold> fundamenta-se na{' '}
                    <Bold>concepção sociointeracionista,</Bold>
                    apoiando-se nos estudos de interação entre o sujeito e o
                    meio, desta forma a construção do conhecimento acontece em
                    um processo contínuo do ser humano em sua relação com o meio
                    e o objeto de conhecimento proposto. Oportuniza-se o
                    desenvolvimento de competências, habilidade e atitudes que
                    favoreçam o caráter do aluno nos aspectos científicos e para
                    cidadania a ser um sujeito empreendedor, ético e solidário.
                </Text>

                {/* <Text>
                    Contamos com a parceira Sistema Maxi de Ensino, com mais de
                    30 anos de experiência, referência em educação no Brasil.
                    Com uma proposta inovadora e exclusiva baseada na Pedagogia
                    Afetiva, o Sistema Maxi de Ensino privilegia uma educação de
                    qualidade que valoriza as interações humanas.
                </Text> */}
            </Container>
        </ContainerHeaven>
    )
}

export default FundamentalOneProposal
