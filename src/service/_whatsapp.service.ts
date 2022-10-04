export class WhatsAppService {
    sendMessage(phone: string, message: string) {
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
    }
}
