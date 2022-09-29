import { AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer).attrs(fadeIn.down)`
    background-size: 100%;
`

interface CardProps {
    background?: string
}
export const Card = styled.article<CardProps>`
    ${tw`p-10 rounded-3xl h-64 shadow-md flex items-center`}

    background-image: ${({ background }) => `url(${background})`};
    color: ${({ theme }) => theme.colors.bgPrimary};
    background-size: cover;
    background-repeat: no-repeat;
    animation: animation 14s ease-in-out infinite both;

    @keyframes animation {
        0% {
            background-position: bottom;
        }
        50% {
            background-position: center;
        }
        100% {
            background-position: bottom;
        }
    }

    &:hover {
        > p {
            ${tw`text-[1.4rem]`}
        }
    }
`

export const Title = styled.p`
    ${tw`text-lg font-bold w-3/4 transition-all duration-500`}
`

export const Subtitle = styled.p.attrs(fadeIn.up)`
    ${tw`text-lg font-bold text-center mt-4`}
    color: ${({ theme }) => theme.colors.primary};
`
