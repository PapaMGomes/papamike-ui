import { AppContainer } from '@/styles/css/ts/components'
import { ContainerBlob } from '../styles'
import styled from 'styled-components'
import tw from 'twin.macro'

export const ContainerWrapper = styled(ContainerBlob)``
export const Container = styled(AppContainer)`
    ${tw`mb-12`}
`

export const Title = styled.p`
    ${tw`mb-4 font-bold text-lg cursor-default`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.article`
    ${tw`grid gap-8 grid-cols-2 sm:flex sm:overflow-x-auto`}
    scroll-snap-type: x mandatory;
`

export const Card = styled.div`
    ${tw`sm:min-w-[86vw] sm:px-8`}
    ${tw`py-8 px-12 rounded-2xl shadow-md flex flex-col items-center transition-all duration-500`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    scroll-snap-align: center;

    &:hover {
        transform: scale(0.94);
    }
`

export const CardTitle = styled.p`
    ${tw`mb-4 font-bold cursor-default`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`text-center mt-2`}
`
