import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { AppContainer } from '@/styles/css/ts/components'
import AppTabs, { IAppTabsItem } from '@/components/common/app-tabs'
import SegmentContainer from '@/components/educational-segment/segment-container'

const HighSchool: React.FC = () => {
    const router = useRouter()

    const contentControl = {
        objective: <b>Works objective</b>,
        pedagogicalProposal: <b>Works pedagogicalProposal</b>
    }

    const tabItems: IAppTabsItem[] = [
        { id: 'objective', name: 'Objetivos Gerais' },
        { id: 'pedagogicalProposal', name: 'Proposta Pedagógica' }
    ]

    const onTabChange = (id: string) => {
        router.push(`/educational-segment/high-school?type=${id}`)
    }

    return (
        <>
            <AppHead title="Ensino Médio" />

            <SegmentContainer
                tabItems={tabItems}
                onTabChange={onTabChange}
                contentControl={contentControl}
                bannerTitle="Ensino Médio"
            />
        </>
    )
}

export default HighSchool
