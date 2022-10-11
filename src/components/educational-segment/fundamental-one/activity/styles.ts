import { AppContainer } from '@/styles/css/ts/components'
import { ContainerBlob } from '../styles'
import styled from 'styled-components'
import tw from 'twin.macro'
import { rgba } from 'polished'

export const Container = styled(AppContainer)`
    ${tw`mb-12`}
`

export const Title = styled.p`
    ${tw`mb-4 font-bold text-lg cursor-default`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.article`
    ${tw`grid gap-8 grid-cols-4 sm:flex flex-col`}
`

interface CardProps {
    image?: string
}
export const Card = styled.div<CardProps>`
    ${tw`sm:min-w-[86vw] `}
    ${tw`w-64 h-40 rounded-2xl shadow-md flex flex-col justify-end items-center transition-all duration-500`}

    background-size: cover;
    background-position: center;
    background-image: ${({ image }) => `url(${image})`};
    box-shadow: inset 0 0 0 2000px ${() => rgba('#2e2d2d', 0.4)};

    &:hover {
        transform: scale(0.94);
    }
`

export const CardTitle = styled.p`
    ${tw`w-full py-2 font-extrabold text-center uppercase cursor-default rounded-b-2xl`}
    color: ${({ theme }) => theme.colors.yellow};
    background: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`text-center mt-2`}
`

export const Label = styled.p`
    ${tw`font-bold text-center cursor-default`}
    color: ${({ theme }) => theme.colors.bgSecondary};
`
