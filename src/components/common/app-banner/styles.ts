import styled from 'styled-components'
import tw from 'twin.macro'

interface ContainerProps {
    bgImage?: string
    enableAnimation?: boolean
}
export const Container = styled.article<ContainerProps>`
    ${tw`p-6 h-56 rounded-3xl shadow-md`}

    animation: ${({ enableAnimation }) =>
        enableAnimation ? `animation 14s ease-in-out infinite both` : ''};
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    background-color: ${({ theme }) => theme.colors.primary};

    background-repeat: no-repeat;
    background-size: cover;

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

    &:before {
        ${tw`absolute left-0 mt-4 w-full rounded-2xl h-28 z-[-1] content-['']`}
        background-color: ${({ theme }) => theme.colors.yellow};
        box-shadow: inset 0px -8px 0px 0px ${({ theme }) => theme.colors.primary};
    }
`

export const Content = styled.div`
    ${tw`h-full`}
`
