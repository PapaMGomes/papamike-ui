import React from 'react'
import { WhatsAppService } from '@/service/_whatsapp.service'
import { Card, Article, Title, Text, Button } from './styles'

interface MatriculationBannerProps {
    data: any
}
const MatriculationBanner: React.FC<MatriculationBannerProps> = props => {
    const { data } = props
    const whatsAppService = new WhatsAppService()

    const sendMessage = () => {
        const num = '5511930883080'
        const msg = `Olá, vim através do site e tenho interesse em marcar uma visita ao Colégio, no dia ${data.date}`

        whatsAppService.sendMessage(num, msg)
    }

    return (
        <Card>
            <Article>
                <Title>MATRÍCULAS ABERTAS 2023</Title>
                <Text>Venha conhecer nosso Colégio!</Text>
                <Text>Apresentação Pedagógica Institucional</Text>
            </Article>

            <Article>
                <Button onClick={sendMessage}>Tenho interesse!</Button>
                <Text>{data.address}</Text>
            </Article>
        </Card>
    )
}

export default MatriculationBanner
