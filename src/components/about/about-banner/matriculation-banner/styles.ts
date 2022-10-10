import BubbleBG from '@/assets/background/bubble.png'
import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Card = styled.article`
    ${tw`p-10 rounded-3xl h-64 shadow-md flex flex-col justify-center items-center`}

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};

    &:hover {
        > p {
            ${tw`text-[1.4rem]`}
        }
    }
`

export const Title = styled.p`
    ${tw`text-lg font-bold w-full transition-all duration-500`}
`

export const Button = styled(AppButton)`
    ${tw`px-8 mt-2 uppercase`}

    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.yellow};
`
