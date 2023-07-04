import React from 'react'
import { ContainerHeaven } from '../styles'

import ChildishGallery from './gallery'
import ChildishAgeGroup from './age-group'
import ChildishImportance from './importance'
import ChildishIntroduction from './introduction'

const ChildishSpecificObjectives: React.FC = () => {
    return (
        <ContainerHeaven>
            <ChildishIntroduction />
            <ChildishImportance />
            <ChildishGallery />
            <ChildishAgeGroup />
        </ContainerHeaven>
    )
}

export default ChildishSpecificObjectives
