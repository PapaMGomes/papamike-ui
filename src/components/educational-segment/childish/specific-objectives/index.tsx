import React from 'react'
import { ContainerHeaven } from '../styles'

import ChildishAgeGroup from './age-group'
import ChildishImportance from './importance'
import ChildishIntroduction from './introduction'

const ChildishSpecificObjectives: React.FC = () => {
    return (
        <ContainerHeaven>
            <ChildishIntroduction />
            <ChildishImportance />
            <ChildishAgeGroup />
        </ContainerHeaven>
    )
}

export default ChildishSpecificObjectives
