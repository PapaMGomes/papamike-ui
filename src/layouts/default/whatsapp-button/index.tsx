import React from 'react'
import { Button } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { WhatsAppService } from '@/service/_whatsapp.service'
import { WHATSAPP_CONTACT } from '@/config/constants/whatsapp.config'

const WhatsappButton: React.FC = () => {
    const whatsAppService = new WhatsAppService()
    const handleClick = () => whatsAppService.sendMessage(WHATSAPP_CONTACT, '')

    return (
        <Button onClick={handleClick} id="whatsapp_button">
            <BsWhatsapp />
        </Button>
    )
}

export default WhatsappButton
