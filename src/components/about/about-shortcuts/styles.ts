import { AppContainer } from '@/styles/css/ts/components'
import BubbleBG from '@/assets/background/bubble.png'
import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer).attrs(fadeIn.default)`
    ${tw`grid gap-8 grid-cols-5`}
`

export const Card = styled.article`
    ${tw`p-4 uppercase flex flex-col items-center justify-center font-bold rounded-xl cursor-pointer transition-all`}
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};
    background-image: ${() => `url(${BubbleBG})`};
    background-repeat: no-repeat;
    background-position: left;
    background-size: 250%;

    &:hover {
        transform: scale(0.95);
        background-size: 100%;
    }
`

export const Title = styled.p``

export const Icon = styled.i``
