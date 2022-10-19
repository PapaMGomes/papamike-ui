import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`my-6`}
`

export const Content = styled.div`
    ${tw`flex w-full items-center justify-center`}
`

export const Title = styled.p`
    ${tw`text-lg font-bold mb-10 text-center uppercase`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Card = styled.article`
    ${tw`sm:h-28 sm:w-[30%] sm:mr-3`}
    ${tw`p-4 mr-14 w-36 h-36 rounded-3xl shadow flex flex-col items-center justify-center cursor-pointer transition-all duration-500`}
    background: ${({ theme }) => theme.colors.primary};

    &:last-of-type {
        ${tw`mr-0 sm:mb-0`}
    }

    &:hover {
        transform: scale(0.94);
        border: 8px solid ${({ theme }) => theme.colors.yellow};
        outline: 8px solid ${({ theme }) => theme.colors.primary};
    }
`

export const Image = styled.img`
    ${tw`w-full mt-3`}
`

export const CardTitle = styled.b`
    ${tw`mt-2 uppercase`}
    color: ${({ theme }) => theme.colors.bgPrimary};
`

export const Icon = styled.i`
    ${tw`text-[4rem] flex items-center transition-all duration-500 sm:text-xl`}
    color: ${({ theme }) => theme.colors.bgPrimary};
`
