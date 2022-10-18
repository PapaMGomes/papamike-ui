import React from 'react'
import { WhatsAppService } from '@/service/_whatsapp.service'
import { Card, Article, Title, Text, Button, TextContainer } from './styles'
import { WHATSAPP_CONTACT_MATRICULATION } from '@/config/constants/whatsapp.config'

const MatriculationBanner: React.FC = () => {
    const whatsAppService = new WhatsAppService()

    const sendMessage = () => {
        const msg = `Olá, vim através do site e tenho interesse em marcar uma visita ao Colégio`
        whatsAppService.sendMessage(WHATSAPP_CONTACT_MATRICULATION, msg)
    }

    return (
        <Card>
            <Article>
                <TextContainer>
                    <Title>MATRÍCULAS ABERTAS 2023</Title>
                    <Text>Venha conhecer nosso Colégio!</Text>
                    <Text>Apresentação Pedagógica Institucional</Text>
                </TextContainer>

                <Button onClick={sendMessage}>Tenho interesse!</Button>
            </Article>
        </Card>
    )
}

export default MatriculationBanner
