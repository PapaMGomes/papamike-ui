import { httpClient } from '@/axios'

export class EmailService {
    send(formData: any) {
        return httpClient.post('/email/send', formData)
    }
}
