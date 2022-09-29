import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Title = styled.p`
    ${tw`font-bold text-lg mb-6`}
`

export const Text = styled.p``

export const Container = styled(AppContainer)`
    ${tw`mb-6 flex`}
`

export const Content = styled.article`
    ${tw`w-full pr-12`}
`

export const ItemsContainer = styled.article`
    ${tw`w-2/5 flex flex-col justify-between`}
`

interface ItemProps {
    isActive?: boolean
}
export const Item = styled.span<ItemProps>`
    ${tw`h-36 w-full mb-2 flex flex-col items-center justify-center font-bold rounded-2xl cursor-pointer transition-all`}
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ isActive, theme }) =>
        isActive ? theme.colors.yellow : theme.colors.bgPrimary};

    > svg {
        ${tw`mb-2 transition-all`}
        ${({ isActive }) => (isActive ? tw`text-[4rem]` : tw`text-[3.4rem]`)};
    }

    &:last-of-type {
        ${tw`mb-0`}
    }
`
