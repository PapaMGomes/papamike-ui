import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)``

export const Title = styled.p`
    ${tw`mb-4 font-bold text-lg cursor-default sm:text-center`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`mb-3 sm:text-center`}
`

export const Bold = styled.b`
    color: ${({ theme }) => theme.colors.primary};
`
