import tw from 'twin.macro'
import styled from 'styled-components'
import { fadeIn } from '@/styles/animation'
import { Title as DefaultTitle, Text as DefaultText } from '../styles'

export const Title = DefaultTitle

export const Text = styled(DefaultText)`
    ${tw`text-center`}
`
export const Container = styled.section.attrs(fadeIn.default)``

export const Content = styled.article`
    scroll-snap-type: x mandatory;
    ${tw`mt-6 grid gap-6 grid-cols-2 sm:flex sm:overflow-x-auto sm:py-5`}
`

export const Card = styled.div`
    scroll-snap-align: center;
    ${tw`p-4 rounded-2xl shadow-md sm:min-w-[70vw]`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const CardTitle = styled.p`
    ${tw`text-center font-bold mb-2`}
`
