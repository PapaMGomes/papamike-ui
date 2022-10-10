import { WhatsAppService } from '@/service/_whatsapp.service'
import React from 'react'
import { Card, Title, Button } from './styles'

interface MatriculationBannerProps {
    data: any
}
const MatriculationBanner: React.FC<MatriculationBannerProps> = props => {
    const { data } = props
    const whatsAppService = new WhatsAppService()

    const sendMessage = () => {
        const num = '5511992312966'
        const msg = `Olá, vim através do site e tenho interesse em marcar uma visita ao Colégio, no dia ${data.date}`

        whatsAppService.sendMessage(num, msg)
    }

    return (
        <Card>
            <Title>Matriculas Abertas {data.date}</Title>
            <Button onClick={sendMessage}>Tenho interesse!</Button>
        </Card>
    )
}

export default MatriculationBanner
