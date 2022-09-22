import React, { useEffect, useRef, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import autoAnimate from '@formkit/auto-animate'
import { IMenuItem } from '@/interfaces/_menu-item.interface'
import { Container, Title, Content, Text, Button } from './styles'

interface AccordionMenuProps {
    item: IMenuItem
    showSubMenu?: boolean
    onOpenSubMenu?: (item: IMenuItem) => void
}
const AccordionMenu: React.FC<AccordionMenuProps> = props => {
    const {
        showSubMenu,
        onOpenSubMenu,
        item: { name, child, action }
    } = props
    const parent = useRef(null)
    const hasChild = !!child?.length
    const isShowSubMenu = hasChild && showSubMenu
    const [currentOpen, setCurrentOpen] = useState('')

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    useEffect(() => {
        if (!showSubMenu) setCurrentOpen('')
    }, [showSubMenu])

    const handleClick = () => {
        if (action) action()
    }

    const handleShowSubMenu = () => {
        if (onOpenSubMenu) onOpenSubMenu(props.item)
    }

    const handleOpenSubMenu = ({ name }: IMenuItem) => {
        if (name === currentOpen) setCurrentOpen('')
        else setCurrentOpen(name)
    }

    return (
        <Container ref={parent}>
            <Title>
                <Text onClick={handleClick}>{name}</Text>
                {hasChild && (
                    <Button
                        onClick={handleShowSubMenu}
                        isShowSubMenu={isShowSubMenu}
                    >
                        <FiChevronRight />
                    </Button>
                )}
            </Title>

            {isShowSubMenu && (
                <Content isShowSubMenu={isShowSubMenu}>
                    {child.map((subItem, index) => (
                        <AccordionMenu
                            key={index}
                            item={subItem}
                            onOpenSubMenu={handleOpenSubMenu}
                            showSubMenu={subItem.name === currentOpen}
                        />
                    ))}
                </Content>
            )}
        </Container>
    )
}

export default AccordionMenu
