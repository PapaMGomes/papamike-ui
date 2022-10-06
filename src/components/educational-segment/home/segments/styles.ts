import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`my-12 grid gap-8 grid-cols-4`}
`

export const Card = styled.article`
    ${tw`p-4 h-28 shadow rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500`}
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};

    &:hover {
        transform: scale(0.9);
        color: ${({ theme }) => theme.colors.yellow};
    }
`

export const Title = styled.p`
    ${tw`text-lg font-bold`}
`
