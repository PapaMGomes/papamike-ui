import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article``

export const ItemsContainer = styled.div`
    ${tw`mb-6 py-6 overflow-x-auto flex justify-around relative overflow-hidden`}

    &:after {
        content: '';
        ${tw`h-0.5 w-full absolute top-[calc(50% - 1px)]`}
        background: ${({ theme }) => theme.colors.primary};
    }
`

interface ItemProps {
    isActive?: boolean
}
export const Item = styled.span.attrs(fadeIn.default)<ItemProps>`
    ${tw`font-bold p-2 relative cursor-pointer z-10 rounded-md flex`}
    color: ${({ theme }) => theme.colors.primary};

    &:after {
        content: '';
        ${tw`w-10 h-10 rounded-full absolute top-0 sm:w-8 sm:h-8`}
        background: ${({ theme }) => theme.colors.yellow};
        box-shadow: inset 0px 0px 0px 10px
            ${({ isActive, theme }) =>
                isActive ? theme.colors.primary : theme.colors.gray};
    }
`

export const Title = styled.p`
    ${tw`relative bottom-7`}
`

export const Content = styled.section``
