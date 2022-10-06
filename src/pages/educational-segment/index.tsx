import React from 'react'
import AppHead from '@/components/common/app-head'
import Banner from '@/components/educational-segment/home/banner'
import PedagogicalProposal from '@/components/educational-segment/home/pedagogical-proposal'
import Segments from '@/components/educational-segment/home/segments'

const EducationalSegment: React.FC = () => {
    return (
        <>
            <AppHead title="Seguimentos Educacionais" />

            <Banner />
            <PedagogicalProposal />
            <Segments />
        </>
    )
}

export default EducationalSegment
