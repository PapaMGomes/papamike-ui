import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)``

export const Title = styled.p`
    ${tw`mb-4 font-bold text-lg cursor-default`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`mb-3 sm:text-center`}
`

export const ItemsContainer = styled.article`
    ${tw`mt-8 grid gap-8 grid-cols-5 md:grid-cols-2`}
`

export const Card = styled.div`
    ${tw`p-4 py-6 rounded-3xl flex flex-col items-center transition-all duration-700`}
    background: ${({ theme }) => theme.colors.primary};

    &:hover {
        transform: scale(0.94);
    }
`

export const Icon = styled.i`
    ${tw`text-[3.5rem]`}
    color: ${({ theme }) => theme.colors.yellow};
`

export const CardText = styled.p`
    ${tw`text-center mt-2 font-bold select-none`}
    color: ${({ theme }) => theme.colors.bgSecondary};
`
