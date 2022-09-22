import { ReactNode } from 'react'

export interface IMenuItem {
    id?: string
    name: string
    action?: Function
    child?: IMenuItem[]
    rightSlot?: ReactNode
}
