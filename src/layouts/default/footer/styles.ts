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
    ${tw`flex items-center sm:flex-col`}
`

export const Image = styled.img`
    ${tw`w-44 mb-2 sm:w-20 sm:h-12 ml-auto sm:hidden`}
`

export const Text = styled.p`
    ${tw`text-sm`}
`

export const Link = styled.a`
    ${tw`text-sm mb-1 cursor-pointer`}
`

export const Span = styled.span`
    ${tw`flex items-center justify-center py-2`}
    background: ${({ theme }) => theme.colors.bgPrimary};
`

export const ItemsContainer = styled.article`
    ${tw`flex flex-col mr-8 sm:flex-row sm:w-full sm:justify-center sm:mb-8 sm:mr-0`}
`

export const Strong = styled.strong`
    ${tw`mb-2 uppercase`}
`

export const ContactContainer = styled.div`
    ${tw`pb-2 flex flex-col justify-between sm:w-full sm:items-center`}
`

export const Icon = styled.i`
    ${tw`sm:mt-0 sm:ml-4 sm:w-14 sm:h-14`}
    ${tw`w-10 h-10 mt-2 text-lg rounded-full flex items-center justify-center cursor-pointer transition-transform duration-700`}
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};

    &:hover {
        transform: scale(1.2);
    }

    &:first-of-type {
        ${tw`mt-0 sm:ml-0`}
    }
`
