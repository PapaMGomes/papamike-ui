import React, { useState } from 'react'
import SideMenu from './side-menu'
import MenuItems from './menu-items'
import { useRouter } from 'next/router'
import Logo from '@/assets/images/logo.png'
import { BiLogInCircle } from 'react-icons/bi'
import { IMenuItem } from '@/interfaces/_menu-item.interface'
import AnhangueraLogo from '@/assets/images/anhanguera-logo.png'
import {
    HeaderContainer,
    Container,
    ImageContainer,
    Image,
    Button,
    ImageIcon,
    LineButton,
    HamburgerButton
} from './styles'
import { WhatsAppService } from '@/service/_whatsapp.service'

const HeaderDefault: React.FC = () => {
    const { push: navigate } = useRouter()
    const whatsAppService = new WhatsAppService()
    const [isShowSideMenu, setIsShowSideMenu] = useState(false)
    const items: IMenuItem[] = [
        {
            name: 'Quem Somos',
            action: () => navigate('/')
        },
        {
            name: 'Segmentos educacionais',
            action: () => navigate('/educational-segment'),
            child: [
                {
                    name: 'Educação infantil',
                    action: () => navigate('/educational-segment/childish'),
                    child: [
                        {
                            name: 'Objetivos Específicos',
                            action: () =>
                                navigate(
                                    '/educational-segment/childish?objective'
                                )
                        },
                        {
                            name: 'Atividades Extracurriculares',
                            action: () =>
                                navigate(
                                    '/educational-segment/childish?activity'
                                )
                        },
                        {
                            name: 'Unidades',
                            action: () =>
                                navigate('/educational-segment/childish?units')
                        }
                    ]
                },
                {
                    name: 'Fundamental I',
                    child: [
                        { name: 'Integral', action: () => {} },
                        { name: 'Objetivos Gerais', action: () => {} },
                        { name: 'Proposta Pedagógica', action: () => {} },
                        { name: 'Atividades Diferenciadas', action: () => {} }
                    ]
                },
                {
                    name: 'Fundamental II',
                    child: [
                        { name: 'Objetivos Gerais', action: () => {} },
                        { name: 'Proposta Pedagógica', action: () => {} }
                    ]
                },
                {
                    name: 'Ensino médio',
                    child: [
                        { name: 'Objetivos Gerais', action: () => {} },
                        { name: 'Proposta Pedagógica', action: () => {} }
                    ]
                }
            ]
        },
        {
            name: 'Cursos',
            action: () => navigate('/course'),
            child: [
                { name: 'Técnico em Enfermagem', action: () => {} },
                {
                    name: 'Cursos Livres',
                    action: () => {},
                    child: [
                        { name: 'Enfermagem', action: () => {} },
                        { name: 'Estética', action: () => {} }
                    ]
                }
            ]
        },
        {
            name: 'Anhanguera',
            action: () => {},
            rightSlot: <ImageIcon src={AnhangueraLogo} />
        },
        {
            name: 'Contato',
            action: () => navigate('/contact')
        }
    ]

    const goToLogin = () => {
        // const num = '5511992312966'
        // const msg = `Olá, vim através do site e tenho interesse em marcar uma visita ao Colégio, no dia 22/10/23`

        // whatsAppService.sendMessage(num, msg)
        window.open('https://papamike.escolaweb.com.br/', '_blank')
    }

    return (
        <HeaderContainer id="app-header">
            <Container>
                <ImageContainer>
                    <Image src={Logo} alt="Papa Mike" />
                </ImageContainer>

                <Button onClick={goToLogin}>
                    Meu acesso
                    <BiLogInCircle />
                </Button>

                <HamburgerButton onClick={() => setIsShowSideMenu(true)}>
                    <LineButton />
                    <LineButton />
                    <LineButton />
                </HamburgerButton>
            </Container>

            <MenuItems items={items} />

            <SideMenu
                items={items}
                show={isShowSideMenu}
                onClose={() => setIsShowSideMenu(false)}
            />
        </HeaderContainer>
    )
}

export default HeaderDefault
