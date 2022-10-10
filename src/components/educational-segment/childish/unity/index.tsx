import { IUnit } from '@/interfaces/unit.interface'
import React, { useState } from 'react'
import { ContainerSimpleStar } from '../styles'
import UnitDetail from './detail'

import UnityIntroduction from './introduction'
import Units from './units'

const ChildishUnity: React.FC = () => {
    const [currentUnit, setCurrentUnit] = useState<IUnit>({} as IUnit)

    const handleSelectUnit = (unit: IUnit) => {
        if (unit.name === currentUnit.name) clearUnitDetail()
        else {
            setCurrentUnit(unit)

            setTimeout(() => {
                location.href = '#unit-detail'
            }, 1000)
        }
    }

    const clearUnitDetail = () => setCurrentUnit({} as IUnit)

    return (
        <ContainerSimpleStar>
            <UnityIntroduction />
            <Units onSelect={item => handleSelectUnit(item)} />
            <UnitDetail item={currentUnit} onClose={clearUnitDetail} />
        </ContainerSimpleStar>
    )
}

export default ChildishUnity
