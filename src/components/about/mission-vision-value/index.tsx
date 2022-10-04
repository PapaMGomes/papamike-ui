import React, { useState } from 'react'
import ValueContent from './value-content'
import VisionContent from './vision-content'
import MissionContent from './mission-content'
import AppModal from '@/components/common/app-modal'
import { Container, ItemsContainer, Item } from './styles'
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
    const [isOpen, setisOpen] = useState(false)
    const [currentContent, setCurrentContent] = useState(initialContent)

    const handleSelect = (item: any) => {
        setCurrentContent(item)
        setisOpen(true)
    }

    return (
        <>
            <Container>
                <ItemsContainer>
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            onClick={() => handleSelect(item)}
                            isActive={currentContent.id === item.id}
                        >
                            {item.icon}
                            {item.title}
                        </Item>
                    ))}
                </ItemsContainer>
            </Container>

            <AppModal
                width="80vw"
                isOpen={isOpen}
                onClickClose={() => setisOpen(false)}
                onBackdropClick={() => setisOpen(false)}
            >
                <Container>{currentContent.content}</Container>
            </AppModal>
        </>
    )
}

export default MissionVisionValue
