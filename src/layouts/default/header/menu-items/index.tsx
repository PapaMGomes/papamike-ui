import React from 'react'
import DropdownList from './dropdown-list'
import { FiChevronDown } from 'react-icons/fi'
import { IMenuItem } from '@/interfaces/_menu-item.interface'
import { Container, Nav, ItemsContainer, Item, ItemTitle } from './styles'

interface MenuItemsProps {
    items: IMenuItem[]
}
const MenuItems: React.FC<MenuItemsProps> = ({ items }) => {
    const handleClick = (item: IMenuItem) => {
        if (item.action) item.action()
    }

    return (
        <Container>
            <Nav>
                <ItemsContainer>
                    {items.map((item, index) => {
                        const { name, child, rightSlot } = item
                        const hasChild = child?.length

                        return (
                            <Item key={index}>
                                <ItemTitle onClick={() => handleClick(item)}>
                                    {rightSlot}
                                    {name}
                                    {hasChild && <FiChevronDown />}
                                </ItemTitle>

                                {hasChild && <DropdownList items={child} />}
                            </Item>
                        )
                    })}
                </ItemsContainer>
            </Nav>
        </Container>
    )
}

export default MenuItems
