import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`pb-8`}
`

interface TitleProps {
    marginTop?: boolean
}
export const Title = styled.p<TitleProps>`
    ${tw`font-bold text-lg mb-6`}
    color: ${({ theme }) => theme.colors.primary};
    margin-top: ${({ marginTop }) => (marginTop ? '1rem' : '0')};
`

export const Text = styled.p``

export const Article = styled.article`
    ${tw`mb-8`}
`

export const ItemsContainer = styled.section`
    ${tw`grid gap-8 grid-cols-4`}
`

export const Card = styled.div`
    ${tw`p-2 pb-4 shadow-md rounded-3xl flex flex-col items-center`}
    background: ${({ theme }) => theme.colors.primary};
`

export const CardTitle = styled.p`
    ${tw`font-bold mt-4`}
    color: ${({ theme }) => theme.colors.bgSecondary};
`

export const CardText = styled.p`
    ${tw`mt-1`}
    color: ${({ theme }) => theme.colors.bgSecondary};
`

export const Map = styled.iframe`
    ${tw`shadow-lg rounded-2xl w-full border-none`}
`

export const CardLink = styled.a`
    ${tw`font-bold mt-4`}
    color: ${({ theme }) => theme.colors.yellow};
`
