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
    ${tw`flex flex-col`}
`

export const CardImage = styled.img`
    ${tw`w-36 h-28 rounded-full object-cover mb-2`}
`

export const Card = styled.div`
    ${tw`sm:flex-col`}
    ${tw`p-8 mb-4 rounded-2xl shadow-md flex items-center`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const CardContent = styled.section`
    ${tw`ml-4 sm:ml-0`}
`

export const CardTitle = styled(Title)`
    ${tw`sm:text-center`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`sm:text-center`}
`
