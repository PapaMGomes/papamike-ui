import WaveYellow from '@/assets/images/elements/wave-yellow.png'
import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const ContainerWrapper = styled.section`
    ${tw`pb-2 relative mt-28`}
    background: ${({ theme }) => theme.colors.yellow};
`

export const Waves = styled.article`
    ${tw`w-full h-28 absolute bottom-[93%]`}

    background: ${`url(${WaveYellow})`} top;
`

export const Container = styled(AppContainer)`
    ${tw`flex flex-col my-10 relative`}
`
export const Content = styled.div`
    ${tw`w-full mt-8 min-h-[200px]`}
`

export const ItemsGroup = styled.article`
    ${tw`w-full grid grid-cols-4 gap-4 sm:grid-cols-2`}
`

export const Title = styled.p`
    ${tw`mb-4 font-bold text-lg cursor-default sm:text-center`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`sm:text-center`}
`

interface CardProps {
    isActive?: boolean
}
export const Card = styled.div<CardProps>`
    ${tw`p-4 mb-4 h-32 shadow-md rounded-2xl flex flex-col items-center justify-center transition-all duration-500`}

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ isActive, theme }) =>
        isActive ? theme.colors.yellow : theme.colors.bgPrimary};

    transform: ${({ isActive }) => (isActive ? 'scale(0.96)' : 'scale(1)')};
    &:last-of-type {
        ${tw`mb-0`}
    }
`

export const CardTitle = styled.p`
    ${tw`mb-2 font-bold text-lg cursor-default text-center`}
`

export const CardSubtitle = styled.p`
    ${tw`cursor-default text-center`}
`
