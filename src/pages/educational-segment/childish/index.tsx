import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { IAppTabsItem } from '@/components/common/app-tabs'
import SegmentContainer from '@/components/educational-segment/segment-container'
import ChildishExtracurricularActivities from '@/components/educational-segment/childish/extracurricular-activities'
import ChildishSpecificObjectives from '@/components/educational-segment/childish/specific-objectives'

const Childish: React.FC = () => {
    const router = useRouter()

    const contentControl = {
        objective: <ChildishSpecificObjectives />,
        activity: <ChildishExtracurricularActivities />
    }

    const tabItems: IAppTabsItem[] = [
        { id: 'objective', name: 'Objetivos' },
        { id: 'activity', name: 'Atividades' }
    ]

    const onTabChange = (id: string) => {
        router.push(`/educational-segment/childish?type=${id}`)
    }

    return (
        <>
            <AppHead title="Educação Infantil" />

            <SegmentContainer
                tabItems={tabItems}
                onTabChange={onTabChange}
                contentControl={contentControl}
                bannerTitle="Educação Infantil"
            />
        </>
    )
}

export default Childish
