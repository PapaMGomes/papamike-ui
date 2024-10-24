import React from 'react'
import { getYear, isAfter } from 'date-fns'
import { WhatsAppService } from '@/service/_whatsapp.service'
import { Card, Article, Title, Text, Button, TextContainer } from './styles'
import { WHATSAPP_CONTACT_MATRICULATION } from '@/config/constants/whatsapp.config'

const getCurrentYear = () => {
    const currentDate = new Date()
    const currentYear = getYear(currentDate)
    const isOctoberOrLater = isAfter(currentDate, new Date(currentYear, 9, 10))
    return isOctoberOrLater ? currentYear + 1 : currentYear
}

const MatriculationBanner: React.FC = () => {
    const whatsAppService = new WhatsAppService()
    const year = getCurrentYear()

    const sendMessage = () => {
        const msg = `Olá, vim através do site e tenho interesse em marcar uma visita ao Colégio`
        whatsAppService.sendMessage(WHATSAPP_CONTACT_MATRICULATION, msg)
    }

    return (
        <Card>
            <Article>
                <Title>MATRÍCULAS ABERTAS {year}</Title>

                <TextContainer>
                    <Text>Venha conhecer nosso Colégio!</Text>
                    <Text>Apresentação Pedagógica Institucional</Text>
                </TextContainer>

                <Button onClick={sendMessage}>Tenho interesse!</Button>
            </Article>
        </Card>
    )
}

export default MatriculationBanner
