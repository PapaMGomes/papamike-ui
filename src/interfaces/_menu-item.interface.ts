import React, { ReactNode } from 'react'

export interface IMenuItem {
    name: string
    action?: Function
    child?: IMenuItem[]
    rightSlot?: ReactNode
}
