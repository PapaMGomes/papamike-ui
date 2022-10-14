import React from 'react'
import AppHead from '@/components/common/app-head'
import AnhangueraCourses from '@/components/anhanguera/courses'
import AnhangueraIntroduction from '@/components/anhanguera/introduction'

const Contact: React.FC = () => {
    return (
        <>
            <AppHead title="Anhanguera" />

            <AnhangueraIntroduction />
            <AnhangueraCourses />
        </>
    )
}

export default Contact
