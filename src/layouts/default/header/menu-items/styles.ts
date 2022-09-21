import { AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import { darken } from 'polished'
import tw from 'twin.macro'

export const Container = styled.section.attrs(fadeIn.right)`
    ${tw`pl-[4.5rem] md:hidden`}
    background: ${({ theme }) =>
        `linear-gradient(90deg, ${theme.colors.bgPrimary} 50%, ${theme.colors.primary} 50%);`};
`

export const Nav = styled(AppContainer)`
    ${tw`flex list-none py-0 pl-12 rounded-bl-3xl`}
    background: ${({ theme }) => theme.colors.primary};
`

export const ItemsContainer = styled.ul`
    ${tw`inline-flex list-none p-0`}
`

export const Item = styled.li`
    ${tw`mr-4 p-3 my-1 relative cursor-pointer rounded-md`}

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
        ${tw`text-lg ml-2`}
    }
`
