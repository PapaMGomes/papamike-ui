import React from 'react'
import AppHead from '@/components/common/app-head'
import AboutBanner from '@/components/about/about-banner'
import EducationSystem from '@/components/about/education-system'
import MissionVisionValue from '@/components/about/mission-vision-value'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <AboutBanner />
            <EducationSystem />
            <MissionVisionValue />
        </>
    )
}

export default Home
