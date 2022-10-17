import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const ContainerWrapper = styled.section`
    background: ${({ theme }) => theme.colors.yellow};
`

export const Container = styled(AppContainer)`
    ${tw`pb-8`}
`

export const Title = styled.p`
    ${tw`font-bold text-lg mb-6`}
    color: ${({ theme }) => theme.colors.primary};
`

export const ItemsContainer = styled.section`
    ${tw`grid gap-8 grid-cols-4 md:grid-cols-2 sm:flex flex-col`}
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
    ${tw`my-1 text-center`}
    color: ${({ theme }) => theme.colors.bgSecondary};
`

export const Map = styled.iframe`
    ${tw`shadow-lg rounded-2xl w-full border-none`}
`

export const CardLink = styled.a`
    ${tw`font-bold mt-4`}
    color: ${({ theme }) => theme.colors.yellow};
`
