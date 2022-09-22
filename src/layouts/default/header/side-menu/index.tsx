import React, { useEffect, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import AccordionMenu from './accordion-menu'
import { BiLogInCircle } from 'react-icons/bi'
import { Container, Nav, Button, Content } from './styles'
import { IMenuItem } from '@/interfaces/_menu-item.interface'

interface SideMenuDefaultProps {
    show: boolean
    items: IMenuItem[]
    onClose: () => void
}

const SideMenuDefault: React.FC<SideMenuDefaultProps> = props => {
    const { items, show, onClose } = props
    const containerRef = useRef<HTMLElement>(null)
    const [currentOpen, setCurrentOpen] = useState('')

    useEffect(() => {
        window.onresize = () => {
            handleClose()
            setCurrentOpen('')
        }
    }, [])
    useEffect(() => {
        if (show) setAnimationIn()
        else setCurrentOpen('')
        document.body.style.overflow = show ? 'hidden' : 'auto'
    }, [show])

    const setAnimationIn = () => {
        const inAnimation = 'animation-in'
        containerRef.current?.classList.add(inAnimation)

        setTimeout(() => {
            containerRef.current?.classList.remove(inAnimation)
        }, 2100)
    }

    const handleClose = () => {
        const outAnimation = 'animation-out'
        containerRef.current?.classList.add(outAnimation)

        setTimeout(() => {
            containerRef.current?.classList.remove(outAnimation)
            onClose()
        }, 980)
    }

    const onOpenSubMenu = ({ name }: IMenuItem) => {
        if (name === currentOpen) setCurrentOpen('')
        else setCurrentOpen(name)
    }

    const goToLogin = () =>
        window.open('https://papamike.escolaweb.com.br/', '_blank')

    if (!show) return <></>
    return (
        <Container ref={containerRef}>
            <Nav>
                <Button className="close-button" onClick={handleClose}>
                    <FiX />
                </Button>
                <Button onClick={goToLogin}>
                    Meu Acesso
                    <BiLogInCircle />
                </Button>
            </Nav>

            <Content>
                {items.map((item, index) => (
                    <AccordionMenu
                        item={item}
                        key={index}
                        onOpenSubMenu={onOpenSubMenu}
                        showSubMenu={item.name === currentOpen}
                    />
                ))}
            </Content>
        </Container>
    )
}

export default SideMenuDefault
