import { AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import { darken } from 'polished'
import tw from 'twin.macro'

export const Container = styled.section.attrs(fadeIn.right)`
    ${tw`pl-[4.5rem] md:hidden w-full`}
    height: ${({ theme }) => theme.spacing.menuHeight};
    background: ${({ theme }) =>
        `linear-gradient(90deg, transparent 50%, ${theme.colors.primary} 50%);`};
`

export const Nav = styled(AppContainer)`
    ${tw`h-full flex list-none py-0 pl-12 rounded-l-full`}
    background: ${({ theme }) => theme.colors.primary};
`

export const ItemsContainer = styled.ul`
    ${tw`inline-flex list-none p-0`}
`

export const Item = styled.li`
    ${tw`mr-4 p-3 my-1 relative cursor-pointer rounded-md uppercase font-bold`}

    &:hover {
        background: ${({ theme }) => darken(0.04, theme.colors.primary)};

        > div {
            ${tw`block`}
        }
    }
`

export const ItemTitle = styled.span`
    ${tw`flex items-center`}
    color: ${({ theme }) => theme.colors.bgSecondary};

    > svg {
        ${tw`text-[1.2rem] ml-2`}
    }
`
