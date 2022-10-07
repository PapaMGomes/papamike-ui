import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppBanner from '@/components/common/app-banner'
import AppTabs, { IAppTabsItem } from '@/components/common/app-tabs'
import { Container, Spacing, BannerContent, BannerTitle } from './styles'

interface SegmentContainerProps {
    tabItems: IAppTabsItem[]
    bannerTitle: string
    bannerImage?: string
    onTabChange: (id: string) => void
    contentControl: { [key: string]: ReactNode }
}

const SegmentContainer: React.FC<SegmentContainerProps> = props => {
    const { tabItems, onTabChange, contentControl, bannerTitle, bannerImage } =
        props

    const router = useRouter()
    const [currentTab, setCurrentTab] = useState('')

    useEffect(() => {
        checkQuery()
    }, [router.query])

    const checkQuery = () => {
        const hasQuery = !!Object.keys(router.query).length

        if (!hasQuery) {
            setCurrentTab(tabItems[0].id as string)
        } else if (router.query.type) {
            setCurrentTab(router.query.type as string)
        }
    }

    return (
        <>
            <Container paddingTop>
                <AppBanner bgImage={bannerImage}>
                    <BannerContent>
                        <BannerTitle>{bannerTitle}</BannerTitle>
                    </BannerContent>
                </AppBanner>

                <Spacing />

                <AppTabs
                    items={tabItems}
                    currentId={currentTab}
                    onSelect={({ id }) => onTabChange(id as string)}
                />

                <Spacing />
            </Container>
            {contentControl[currentTab]}
        </>
    )
}

export default SegmentContainer
