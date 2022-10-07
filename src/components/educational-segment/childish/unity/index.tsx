import React from 'react'
import { ContainerSimpleStar } from '../styles'

import UnityIntroduction from './introduction'
import Units from './units'

const ChildishUnity: React.FC = () => {
    return (
        <ContainerSimpleStar>
            <UnityIntroduction />
            <Units />
        </ContainerSimpleStar>
    )
}

export default ChildishUnity
