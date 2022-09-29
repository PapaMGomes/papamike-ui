import React, { useState } from 'react'
import ValueContent from './value-content'
import VisionContent from './vision-content'
import MissionContent from './mission-content'
import { Container, Content, ItemsContainer, Item } from './styles'
import { GiTargetArrows, GiSemiClosedEye, GiDiamondHard } from 'react-icons/gi'

const MissionVisionValue: React.FC = () => {
    const items = [
        {
            id: 'mission',
            title: 'Missão',
            icon: <GiTargetArrows />,
            content: <MissionContent />
        },
        {
            id: 'vision',
            title: 'Visão',
            icon: <GiSemiClosedEye />,
            content: <VisionContent />
        },
        {
            id: 'values',
            title: 'Valores',
            icon: <GiDiamondHard />,
            content: <ValueContent />
        }
    ]

    const initialContent = items[0]
    const [currentContent, setCurrentContent] = useState(initialContent)

    return (
        <Container>
            <Content>{currentContent.content}</Content>

            <ItemsContainer>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        isActive={currentContent.id === item.id}
                        onMouseEnter={() => setCurrentContent(item)}
                    >
                        {item.icon}
                        {item.title}
                    </Item>
                ))}
            </ItemsContainer>
        </Container>
    )
}

export default MissionVisionValue
