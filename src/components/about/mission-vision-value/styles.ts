import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Title = styled.p`
    ${tw`font-bold text-lg mb-6`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p``

export const Container = styled(AppContainer)`
    ${tw`my-6 flex sm:flex-col-reverse`}
`

export const Content = styled.article`
    ${tw`w-full pr-12 sm:pr-0`}
`

export const ItemsContainer = styled.article`
    ${tw`flex  justify-between flex-row w-full `}
`

interface ItemProps {
    isActive?: boolean
}
export const Item = styled.span<ItemProps>`
    ${tw`sm:mb-0 mr-2 sm:h-28`}
    ${tw`sm:mb-0 sm:mr-2 sm:h-28`}
    ${tw`h-36 w-full mb-2 flex flex-col items-center justify-center font-bold uppercase rounded-2xl cursor-pointer transition-all`}
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ isActive, theme }) =>
        isActive ? theme.colors.yellow : theme.colors.bgPrimary};

    > svg {
        ${tw`mb-2 transition-all`}
        ${({ isActive }) =>
            isActive
                ? tw`text-[4rem] sm:text-[2.8rem]`
                : tw`text-[3.4rem] sm:text-[2.6rem]`};
    }

    &:last-of-type {
        ${tw`mb-0 sm:mr-0`}
    }
`
