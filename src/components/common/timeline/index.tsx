import React, { useEffect, useState } from 'react'
import { Container, Content, ItemsContainer, Item, Title } from './styles'

interface TimelineProps {
    items: any[]
}

const Timeline: React.FC<TimelineProps> = props => {
    const { items } = props
    const initial = items[0]
    const [current, setCurrent] = useState(initial)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [filteredItems, setFilteredItems] = useState<any[]>([])

    useEffect(() => {
        onIndexChange()
    }, [currentIndex])

    const onSelectItem = (item: any) => {
        const itemIndex = items.indexOf(item)

        setCurrent(item)
        setCurrentIndex(itemIndex)
    }

    const onIndexChange = () => {
        const perPage = 5
        const isMinimum = currentIndex - 3 <= 0
        const initial = isMinimum ? 0 : currentIndex - 3
        const final = isMinimum ? perPage : currentIndex + 2
        const isMaximum = initial + perPage - 1 >= items.length

        if (isMaximum) return
        else setFilteredItems(items.slice(initial, final))
    }

    const isActive = (item: any) => {
        const itemIndex = filteredItems.indexOf(item)
        const currentItemIndex = filteredItems.indexOf(current)

        return itemIndex <= currentItemIndex
    }

    return (
        <Container>
            <ItemsContainer>
                {filteredItems.map((item, index) => (
                    <Item
                        key={index}
                        isActive={isActive(item)}
                        onClick={() => onSelectItem(item)}
                    >
                        <Title>{item.title}</Title>
                    </Item>
                ))}
            </ItemsContainer>
            <Content>{current.content}</Content>
        </Container>
    )
}

export default Timeline
