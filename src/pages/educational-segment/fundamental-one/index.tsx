import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { IAppTabsItem } from '@/components/common/app-tabs'
import SegmentContainer from '@/components/educational-segment/segment-container'
import FundamentalOneProposal from '@/components/educational-segment/fundamental-one/proposal'
import FundamentalOneActivity from '@/components/educational-segment/fundamental-one/activity'
import FundamentalOneIntegral from '@/components/educational-segment/fundamental-one/integral'
import FundamentalOneObjective from '@/components/educational-segment/fundamental-one/objective'

const FundamentalOne: React.FC = () => {
    const router = useRouter()

    const contentControl = {
        full: <FundamentalOneIntegral />,
        objective: <FundamentalOneObjective />,
        pedagogicalProposal: <FundamentalOneProposal />,
        differentiatedActivities: <FundamentalOneActivity />
    }

    const tabItems: IAppTabsItem[] = [
        { id: 'full', name: 'Integral' },
        { id: 'objective', name: 'Objetivos Gerais' },
        { id: 'pedagogicalProposal', name: 'Proposta Pedagógica' },
        { id: 'differentiatedActivities', name: 'Atividades' }
    ]

    const onTabChange = (id: string) => {
        router.push(`/educational-segment/fundamental-one?type=${id}`)
    }

    return (
        <>
            <AppHead title="Fundamental I" />

            <SegmentContainer
                tabItems={tabItems}
                onTabChange={onTabChange}
                contentControl={contentControl}
                bannerTitle="Fundamental I"
            />
        </>
    )
}

export default FundamentalOne
