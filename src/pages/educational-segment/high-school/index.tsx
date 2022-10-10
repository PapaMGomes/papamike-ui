import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { IAppTabsItem } from '@/components/common/app-tabs'
import SegmentContainer from '@/components/educational-segment/segment-container'
import HighSchoolProposal from '@/components/educational-segment/high-school/proposal'
import HighSchoolObjective from '@/components/educational-segment/high-school/objective'

const HighSchool: React.FC = () => {
    const router = useRouter()

    const contentControl = {
        objective: <HighSchoolObjective />,
        pedagogicalProposal: <HighSchoolProposal />
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
