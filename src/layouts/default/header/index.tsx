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
    Article,
    ImageIcon
} from './styles'
import { WhatsAppService } from '@/service/_whatsapp.service'
import AppHamburguerButton from '@/components/common/app-hamburguer-button'
import { GiTeacher } from 'react-icons/gi'
import { FaUserAstronaut } from 'react-icons/fa'

const HeaderDefault: React.FC = () => {
    const { push: navigate } = useRouter()
    const whatsAppService = new WhatsAppService()
    const [isShowSideMenu, setIsShowSideMenu] = useState(false)
    const items: IMenuItem[] = [
        {
            name: 'Quem Somos',
            action: () => goTo('/')
        },
        {
            name: 'Segmentos educacionais',
            child: [
                {
                    name: 'Educação infantil',
                    action: () => goTo('/educational-segment/childish'),
                    child: [
                        {
                            name: 'Objetivos Gerais',
                            action: () =>
                                goTo(
                                    '/educational-segment/childish?type=objective'
                                )
                        },
                        {
                            name: 'Atividades',
                            action: () =>
                                goTo(
                                    '/educational-segment/childish?type=activity'
                                )
                        },
                        {
                            name: 'Unidades',
                            action: () =>
                                goTo('/educational-segment/childish?type=units')
                        }
                    ]
                },
                {
                    name: 'Fundamental I',
                    action: () => goTo('/educational-segment/fundamental-one'),
                    child: [
                        {
                            name: 'Integral',
                            action: () => {
                                goTo(
                                    '/educational-segment/fundamental-one?type=full'
                                )
                            }
                        },
                        {
                            name: 'Objetivos Gerais',
                            action: () => {
                                goTo(
                                    '/educational-segment/fundamental-one?type=objective'
                                )
                            }
                        },
                        {
                            name: 'Proposta Pedagógica',
                            action: () => {
                                goTo(
                                    '/educational-segment/fundamental-one?type=pedagogicalProposal'
                                )
                            }
                        },
                        {
                            name: 'Atividades',
                            action: () => {
                                goTo(
                                    '/educational-segment/fundamental-one?type=differentiatedActivities'
                                )
                            }
                        }
                    ]
                },
                {
                    name: 'Fundamental II',
                    action: () => goTo('/educational-segment/fundamental-two'),
                    child: [
                        {
                            name: 'Objetivos Gerais',
                            action: () => {
                                goTo(
                                    '/educational-segment/fundamental-two?type=objective'
                                )
                            }
                        },
                        {
                            name: 'Proposta Pedagógica',
                            action: () => {
                                goTo(
                                    '/educational-segment/fundamental-two?type=pedagogicalProposal'
                                )
                            }
                        }
                    ]
                },
                {
                    name: 'Ensino médio',
                    action: () => goTo('/educational-segment/high-school'),
                    child: [
                        {
                            name: 'Objetivos Gerais',
                            action: () => {
                                goTo(
                                    '/educational-segment/high-school?type=objective'
                                )
                            }
                        },
                        {
                            name: 'Proposta Pedagógica',
                            action: () => {
                                goTo(
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
            action: () => goTo('/course'),
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
            action: () => goTo('/contact')
        }
    ]

    const goTo = (route: string) => {
        navigate(route)
        setIsShowSideMenu(false)
    }

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

                <Article>
                    <Button onClick={goToLogin}>
                        Área do professor
                        <GiTeacher />
                    </Button>

                    <Button onClick={goToLogin}>
                        Área do aluno
                        <FaUserAstronaut />
                    </Button>

                    <AppHamburguerButton
                        onClick={() => setIsShowSideMenu(true)}
                    />
                </Article>
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
