import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`grid gap-10 grid-cols-4`}
`

export const Card = styled.article`
    ${tw`shadow-md p-4 px-5 rounded-2xl text-center transition-all duration-500`}
    background: ${({ theme }) => theme.colors.primary};

    &:hover {
        transform: scale(0.94);
    }
`

export const Icon = styled.i`
    > svg {
        ${tw`text-[3.6rem] mb-3`}
        color: ${({ theme }) => theme.colors.yellow};
    }
`

export const Text = styled.p`
    ${tw`text-center font-bold`}
    color: ${({ theme }) => theme.colors.bgPrimary};
`
