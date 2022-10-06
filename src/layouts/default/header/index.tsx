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
                                    '/educational-segment/childish?type=objective'
                                )
                        },
                        {
                            name: 'Atividades Extracurriculares',
                            action: () =>
                                navigate(
                                    '/educational-segment/childish?type=activity'
                                )
                        },
                        {
                            name: 'Unidades',
                            action: () =>
                                navigate(
                                    '/educational-segment/childish?type=units'
                                )
                        }
                    ]
                },
                {
                    name: 'Fundamental I',
                    action: () =>
                        navigate('/educational-segment/fundamental-one'),
                    child: [
                        {
                            name: 'Integral',
                            action: () => {
                                navigate(
                                    '/educational-segment/fundamental-one?type=full'
                                )
                            }
                        },
                        {
                            name: 'Objetivos Gerais',
                            action: () => {
                                navigate(
                                    '/educational-segment/fundamental-one?type=objective'
                                )
                            }
                        },
                        {
                            name: 'Proposta Pedagógica',
                            action: () => {
                                navigate(
                                    '/educational-segment/fundamental-one?type=pedagogicalProposal'
                                )
                            }
                        },
                        {
                            name: 'Atividades Diferenciadas',
                            action: () => {
                                navigate(
                                    '/educational-segment/fundamental-one?type=differentiatedActivities'
                                )
                            }
                        }
                    ]
                },
                {
                    name: 'Fundamental II',
                    action: () =>
                        navigate('/educational-segment/fundamental-two'),
                    child: [
                        {
                            name: 'Objetivos Gerais',
                            action: () => {
                                navigate(
                                    '/educational-segment/fundamental-two?type=objective'
                                )
                            }
                        },
                        {
                            name: 'Proposta Pedagógica',
                            action: () => {
                                navigate(
                                    '/educational-segment/fundamental-two?type=pedagogicalProposal'
                                )
                            }
                        }
                    ]
                },
                {
                    name: 'Ensino médio',
                    action: () => navigate('/educational-segment/high-school'),
                    child: [
                        {
                            name: 'Objetivos Gerais',
                            action: () => {
                                navigate(
                                    '/educational-segment/high-school?type=objective'
                                )
                            }
                        },
                        {
                            name: 'Proposta Pedagógica',
                            action: () => {
                                navigate(
                                    '/educational-segment/high-school?type=pedagogicalProposal'
                                )
                            }
                        }
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
