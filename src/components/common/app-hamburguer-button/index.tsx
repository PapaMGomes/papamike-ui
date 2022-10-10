import React from 'react'
import { Button, Line } from './styles'

interface AppHamburguerButtonProps {
    onClick: () => void
}

const AppHamburguerButton: React.FC<AppHamburguerButtonProps> = ({
    onClick
}) => {
    return (
        <Button onClick={onClick}>
            <Line />
            <Line />
            <Line />
        </Button>
    )
}

export default AppHamburguerButton
