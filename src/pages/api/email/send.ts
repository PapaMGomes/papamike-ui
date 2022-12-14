import { TRANSPORT_CONFIG } from '@/config/constants/email.config'
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import NextCors from 'nextjs-cors'

type ResponseData = { message: string; error?: any }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        optionsSuccessStatus: 200,
        origin: '*'
    })

    try {
        const transporter = nodemailer.createTransport(TRANSPORT_CONFIG)
        await transporter.sendMail(req.body)

        res.status(200).json({ message: 'Email enviado com sucesso' })
    } catch (error) {
        res.status(400).json({
            message: 'Ocorreu um erro ao enviar email',
            error
        })
    }
}
