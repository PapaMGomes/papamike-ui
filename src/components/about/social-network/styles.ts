import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`my-6 mt-12`}
`

export const Content = styled.div`
    ${tw`flex w-full items-center justify-center`}
`

export const Title = styled.p`
    ${tw`text-lg font-bold mb-4`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Card = styled.article`
    ${tw`sm:h-20`}
    ${tw`p-4 mr-14 w-32 h-32 rounded-3xl shadow flex items-center justify-center cursor-pointer transition-all duration-500`}
    background: ${({ theme }) => theme.colors.primary};

    &:last-of-type {
        ${tw`mr-0 sm:mb-0`}
    }

    &:hover {
        transform: scale(0.94);

        > i {
            color: ${({ theme }) => theme.colors.yellow};
        }
    }
`

export const Icon = styled.i`
    ${tw`text-[4rem] flex items-center transition-all duration-500 sm:text-xl`}
    color: ${({ theme }) => theme.colors.bgPrimary};
`
