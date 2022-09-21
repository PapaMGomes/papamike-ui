import React, { useState } from 'react'
import SideMenu from './side-menu'
import MenuItems from './menu-items'
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

const HeaderDefault: React.FC = () => {
    const [isShowSideMenu, setIsShowSideMenu] = useState(false)
    const items: IMenuItem[] = [
        {
            name: 'Quem Somos',
            action: () => {}
        },
        {
            name: 'Segmentos educacionais',
            child: [
                {
                    name: 'Educação infantil',
                    child: [
                        { name: 'Objetivos Específicos', action: () => {} },
                        {
                            name: 'Atividades Extracurriculares',
                            action: () => {}
                        },
                        { name: 'Cardápio', action: () => {} },
                        { name: 'Kids - Unidade Centro', action: () => {} },
                        { name: 'Kids - Unidade Mutinga', action: () => {} }
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
            action: () => {},
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
        { name: 'Contato', action: () => {} }
    ]

    const goToLogin = () =>
        window.open('https://papamike.escolaweb.com.br/', '_blank')

    return (
        <HeaderContainer>
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
