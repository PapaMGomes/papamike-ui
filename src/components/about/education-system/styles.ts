import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const WraperContainer = styled.section`
    ${tw`mt-4 py-4`}

    background: ${({ theme }) => theme.colors.yellow};
`

export const Container = styled(AppContainer)``

export const Title = styled.p`
    ${tw`text-lg font-bold mb-2`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.div`
    ${tw`mt-6 flex justify-between sm:flex-col`}

    > div {
        ${tw`w-[calc(50% - 12px)] sm:w-full sm:mb-4`}
    }
`

export const Card = styled.article`
    ${tw`w-full h-full flex flex-col items-center py-6 px-12 shadow-md rounded-3xl transition-all duration-700`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const CardTitle = styled.p`
    ${tw`font-bold text-[1.4rem] text-center mb-1`}
    color: ${({ theme }) => theme.colors.primary};
`

export const CardSubtitle = styled.p`
    ${tw`font-bold text-center mb-4`}
    color: ${({ theme }) => theme.colors.gray};
`

export const Text = styled.p`
    ${tw`text-center mb-8`}
`

export const Link = styled.a`
    ${tw`font-bold text-center mt-auto flex items-center`}
    color: ${({ theme }) => theme.colors.gray};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    > svg {
        ${tw`ml-2`}
    }
`
