import {
    Dot,
    Year,
    Line,
    Content,
    Container,
    LeftContent,
    RightContent,
    ItemContainer
} from './styles'
import React from 'react'
import ScrollAnimation from '@/components/common/scroll-animation'

interface TimelineItem {
    title: string
    content: React.ReactNode
}

interface TimelineProps {
    items: TimelineItem[]
}

const VerticalTimeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <Container>
            <Line />

            {items.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                    <ItemContainer key={index} side={isLeft ? 'left' : 'right'}>
                        {isLeft ? (
                            <LeftContent>
                                <ScrollAnimation animation="backInLeft">
                                    <Content>
                                        <Year>{item.title}</Year>
                                        {item.content}
                                    </Content>
                                </ScrollAnimation>
                            </LeftContent>
                        ) : (
                            <RightContent>
                                <ScrollAnimation animation="backInRight">
                                    <Content>
                                        <Year>{item.title}</Year>
                                        {item.content}
                                    </Content>
                                </ScrollAnimation>
                            </RightContent>
                        )}
                        <Dot />
                    </ItemContainer>
                )
            })}
        </Container>
    )
}

export default VerticalTimeline
