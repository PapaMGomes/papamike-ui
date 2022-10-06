import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`mt-8`}
`

export const Text = styled.p`
    ${tw`mb-4`}
`

export const Bold = styled.b`
    color: ${({ theme }) => theme.colors.primary};
`
