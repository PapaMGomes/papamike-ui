import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { IAppTabsItem } from '@/components/common/app-tabs'
import SegmentContainer from '@/components/educational-segment/segment-container'
import FundamentalTwoObjective from '@/components/educational-segment/fundamental-two/objective'
import FundamentalTwoProposal from '@/components/educational-segment/fundamental-two/proposal'

const FundamentalTwo: React.FC = () => {
    const router = useRouter()

    const contentControl = {
        objective: <FundamentalTwoObjective />,
        pedagogicalProposal: <FundamentalTwoProposal />
    }

    const tabItems: IAppTabsItem[] = [
        { id: 'objective', name: 'Objetivos Gerais' },
        { id: 'pedagogicalProposal', name: 'Proposta Pedagógica' }
    ]

    const onTabChange = (id: string) => {
        router.push(`/educational-segment/fundamental-two?type=${id}`)
    }

    return (
        <>
            <AppHead title="Fundamental II" />

            <SegmentContainer
                tabItems={tabItems}
                onTabChange={onTabChange}
                contentControl={contentControl}
                bannerTitle="Fundamental II"
            />
        </>
    )
}

export default FundamentalTwo
