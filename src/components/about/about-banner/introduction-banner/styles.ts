import BubbleBG from '@/assets/background/bubble.png'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Card = styled.article`
    ${tw`p-10 rounded-3xl h-64 shadow-md flex items-center sm:flex-col`}

    background-image: ${() => `url(${BubbleBG})`};
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
    ${tw`text-lg font-bold w-3/4 transition-all duration-500 sm:text-[1.3rem]`}
`

export const ImageContainer = styled.div`
    ${tw`flex items-center`}
`

export const Image = styled.img`
    ${tw`ml-4 w-48 sm:w-12`}
`
