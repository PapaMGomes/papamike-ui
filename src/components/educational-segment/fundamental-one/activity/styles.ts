import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import { rgba } from 'polished'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`mb-12`}
`

export const Title = styled.p`
    ${tw`mb-4 font-bold text-lg cursor-default`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.article`
    ${tw`grid gap-8 grid-cols-4 md:grid-cols-2 md:w-full sm:flex flex-col`}
`

interface CardProps {
    image?: string
}
export const Card = styled.div<CardProps>`
    ${tw`sm:min-w-[86vw]`}
    ${tw`w-64 h-40 rounded-2xl shadow-md flex flex-col justify-end items-center transition-all duration-500`}

    background-size: cover;
    background-position: center;
    background-image: ${({ image }) => `url(${image})`};

    &:hover {
        transform: scale(0.94);
    }
`

export const CardTitle = styled.p`
    ${tw`w-full py-2 font-extrabold text-center uppercase cursor-default rounded-b-2xl`}
    color: ${({ theme }) => theme.colors.bgSecondary};
    background: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`text-center mt-2`}
`

export const Label = styled.p`
    ${tw`font-bold text-center cursor-default text-sm`}
    color: ${({ theme }) => theme.colors.bgSecondary};
`
