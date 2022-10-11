import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { setLoading } from '@/hooks/loading.hook'
import { yupResolver } from '@hookform/resolvers/yup'
import { EmailService } from '@/service/email.service'
import { AlertService } from '@/service/_alert.service'
import { IContact } from '@/interfaces/contact.interface'
import PandaContact from '@/assets/images/panda-contact.jpg'
import { TemplateEmailModel } from '@/models/email/template-email.model'
import {
    ImageContainer,
    FormContainer,
    Container,
    Article,
    Image,
    Nav,
    Title,
    Text,
    Form,
    FormGroup,
    Label,
    Input,
    Textarea,
    Span,
    Button
} from './styles'
import { RECIPIENT_CONTACT } from '@/config/constants/email.config'

const ContactForm: React.FC = () => {
    const emailService = new EmailService()
    const alertService = new AlertService()
    const templateEmailModel = new TemplateEmailModel()

    const contactForm = yup.object().shape({
        telephone: yup.string(),
        name: yup.string().required('Insira o seu nome'),
        email: yup.string().required('Insira o seu email'),
        message: yup.string().required('Insira o corpo do e-mail')
    })

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IContact>({ resolver: yupResolver(contactForm) })

    const handleSubmitForm = async (model: IContact) => {
        console.log('MODEL :', model)
        setLoading(true, 'Enviando o seu contato...')

        try {
            const emailDTO = {
                from: model.email,
                replyTo: model.email,
                to: RECIPIENT_CONTACT,
                subject: 'Contato',
                html: templateEmailModel.contact(model)
            }

            const { data } = await emailService.send(emailDTO)
            alertService.success(data.message)
            reset()
        } catch (error) {
            alertService.error('Ocorreu um erro ao enviar o currículo')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container paddingTop>
            <FormContainer>
                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Nav>
                        <Article>
                            <Title>Contato Papa Mike</Title>
                            <Text>
                                Informe-se sobre os nossos serviços
                                educacionais.
                            </Text>
                        </Article>

                        <Button>Enviar</Button>
                    </Nav>

                    <FormGroup>
                        <Label>Nome</Label>
                        <Input {...register('name')} type="text" />
                        <Span>{errors.name?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>E-mail</Label>
                        <Input {...register('email')} type="email" />
                        <Span>{errors.email?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>Telefone</Label>
                        <Input {...register('telephone')} type="text" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Message</Label>
                        <Textarea {...register('message')} rows={10}></Textarea>
                        <Span>{errors.message?.message}</Span>
                    </FormGroup>
                </Form>
            </FormContainer>

            <ImageContainer>
                <Image src={PandaContact} />
            </ImageContainer>
        </Container>
    )
}

export default ContactForm
