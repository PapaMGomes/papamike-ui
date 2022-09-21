import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import { darken } from 'polished'
import tw from 'twin.macro'

interface ContainerProps {
    position?: 'bottom' | 'right'
}
export const Container = styled.div.attrs(fadeIn.default)<ContainerProps>`
    ${({ position }) => {
        const postitionControl = {
            top: tw``,
            left: tw``,
            bottom: tw`mt-2`,
            right: tw`top-0 left-full`
        }

        return postitionControl[position || 'bottom']
    }}

    ${tw`hidden absolute w-auto rounded-lg shadow-md z-20`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-top: ${({ theme, position }) => {
        if (position !== 'bottom') return `4px solid ${theme.colors.primary}`
        return `none`
    }};

    li:hover {
        background: ${({ theme }) => darken(0.04, theme.colors.bgSecondary)};
    }

    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const ItemsContainer = styled.ul`
    ${tw`list-none w-full`}
`

export const Item = styled.li`
    ${tw`mx-4 my-2 p-4 relative rounded-md transition-all duration-500`}

    &:hover > div {
        ${tw`block`}
    }

    &:first-of-type {
        ${tw`mt-4`}
    }

    &:last-of-type {
        ${tw`mb-4`}
    }
`

export const ItemTitleContainer = styled.span`
    ${tw`w-full text-left whitespace-nowrap max-w-[20vh]`}
`

export const ItemTitle = styled.b`
    ${tw`flex w-full items-center justify-between`}

    > svg {
        ${tw`text-lg ml-2`}
    }
`
