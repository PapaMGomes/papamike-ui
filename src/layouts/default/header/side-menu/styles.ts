import { AppButton, AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import { darken } from 'polished'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`fixed top-0 right-0 h-screen w-full flex flex-col overflow-x-hidden overflow-y-auto`}

    background: ${({ theme }) => `
        linear-gradient(
            166deg,
            ${theme.colors.primary} 70%,
            ${darken(0.1, theme.colors.primary)} 90%
        )
    `};

    &.animation-in {
        animation: animation-in 1s ease-in-out both;

        @keyframes animation-in {
            0% {
                ${tw`w-44 h-44 top-[-20vh] right-[-20vw] rounded-bl-full`}

                nav {
                    ${tw`hidden`}
                }
            }
            100% {
                ${tw`rounded-bl-none`}
            }
        }
    }

    &.animation-out {
        animation: animation-out 1s ease-in-out both;

        > nav,
        > article {
            ${tw`hidden`}
            animation-delay: 0ms;
        }

        @keyframes animation-out {
            100% {
                top: -20vh;
                right: -20vw;
                ${tw`w-20 h-0 opacity-0 rounded-bl-full`}
            }
        }
    }
`

export const Nav = styled(AppContainer).attrs(fadeIn.right)`
    ${tw`py-0 w-full flex items-center justify-between fixed top-0 left-0 z-10`}
    height: ${({ theme }) => theme.spacing.headerHeight};
    background: ${({ theme }) => theme.colors.primary};
    animation-delay: 900ms;
`

export const Button = styled(AppButton)`
    ${tw`p-0 flex items-center justify-between`}

    > svg {
        ${tw`text-xl ml-2`}
    }

    &.close-button {
        ${tw`p-0 h-auto w-auto flex justify-center items-center bg-transparent`}

        > svg {
            ${tw`text-[2rem] font-bold ml-0`}
            color: ${({ theme }) => theme.colors.white};
        }
    }
`

export const Content = styled.article.attrs(fadeIn.right)`
    ${tw`flex flex-col mt-24`}
    animation-delay: 900ms;
`
