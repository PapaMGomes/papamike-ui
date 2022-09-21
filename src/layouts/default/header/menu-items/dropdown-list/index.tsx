import React from 'react'
import { IMenuItem } from '@/interfaces/_menu-item.interface'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'
import {
    Container,
    ItemsContainer,
    Item,
    ItemTitleContainer,
    ItemTitle
} from './styles'

interface DropdownListProps {
    items: IMenuItem[]
    position?: 'bottom' | 'right'
}

const DropdownList: React.FC<DropdownListProps> = props => {
    const { items, position } = props

    const getIcon = () => {
        const iconsControl = {
            right: <FiChevronRight />,
            bottom: <FiChevronDown />
        }

        return iconsControl[position || 'right']
    }

    const handleClick = (item: IMenuItem) => {
        if (item.action) item.action()
    }

    return (
        <Container position={position || 'bottom'}>
            <ItemsContainer>
                {items.map((item, index) => {
                    const { name, child } = item
                    const hasChild = child?.length

                    return (
                        <Item key={index}>
                            <ItemTitleContainer
                                title={name}
                                onClick={() => handleClick(item)}
                            >
                                <ItemTitle>
                                    {name}
                                    {hasChild && getIcon()}
                                </ItemTitle>
                            </ItemTitleContainer>

                            {hasChild && (
                                <DropdownList items={child} position="right" />
                            )}
                        </Item>
                    )
                })}
            </ItemsContainer>
        </Container>
    )
}

export default DropdownList
