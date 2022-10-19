import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/ts/components'

export const FooterContainer = styled.footer`
    ${tw`mt-8`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Container = styled(AppContainer)`
    ${tw`flex flex-col py-4`}
`

export const Content = styled.section`
    ${tw`flex items-center justify-between sm:flex-col`}
`

export const Article = styled.article`
    ${tw`flex flex-col items-center`}

    &:first-of-type {
        ${tw`grid gap-x-4 grid-cols-2 sm:gap-0 sm:grid-cols-1`}
    }
`

export const Image = styled.img`
    ${tw`w-44 mb-2 sm:w-20 sm:h-12 sm:hidden`}
`

export const Text = styled.p`
    ${tw`text-sm`}
`

export const Link = styled.a`
    ${tw`mb-2 cursor-pointer flex items-center`}

    > svg {
        ${tw`mr-3`}
    }

    &:last-of-type {
        ${tw`mb-0`}
    }
`

export const Span = styled.span`
    ${tw`flex items-center justify-center py-2`}
    background: ${({ theme }) => theme.colors.bgPrimary};
`

export const ItemsContainer = styled.article`
    ${tw`mb-8 flex sm:mt-8`}
`

export const Strong = styled.strong`
    ${tw`mb-2 uppercase sm:text-center`}
`

export const ContactContainer = styled.div`
    ${tw`py-3 flex flex-col justify-between sm:w-full w-full`}
    border-bottom: 1px solid;

    &:nth-child(3),
    &:last-of-type {
        border-bottom: none;
    }
`

export const Icon = styled.i`
    ${tw`w-10 h-10 mr-4 text-lg rounded-full flex items-center justify-center cursor-pointer transition-transform duration-700`}
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};

    &:hover {
        transform: scale(1.2);
    }

    &:last-of-type {
        ${tw`mr-0`}
    }
`
