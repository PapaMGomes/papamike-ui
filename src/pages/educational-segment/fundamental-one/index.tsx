import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { IAppTabsItem } from '@/components/common/app-tabs'
import SegmentContainer from '@/components/educational-segment/segment-container'

const FundamentalOne: React.FC = () => {
    const router = useRouter()

    const contentControl = {
        full: <b>Works full</b>,
        objective: <b>Works objective</b>,
        pedagogicalProposal: <b>Works pedagogicalProposal</b>,
        differentiatedActivities: <b>Works differentiatedActivities</b>
    }

    const tabItems: IAppTabsItem[] = [
        { id: 'full', name: 'Integral' },
        { id: 'objective', name: 'Objetivos Gerais' },
        { id: 'pedagogicalProposal', name: 'Proposta Pedagógica' },
        { id: 'differentiatedActivities', name: 'Atividades Diferenciadas' }
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
