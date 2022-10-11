import React from 'react'
import AppHead from '@/components/common/app-head'
import Detail from '@/components/course/nursing-technician/detail'
import Gallery from '@/components/course/nursing-technician/gallery'
import Introduction from '@/components/course/nursing-technician/introduction'

const NursingTechnician: React.FC = () => {
    return (
        <>
            <AppHead title="Técnico em Enfermagem" />

            <Introduction />
            <Detail />
            <Gallery />
        </>
    )
}

export default NursingTechnician
