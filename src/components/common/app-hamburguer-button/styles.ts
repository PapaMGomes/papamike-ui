import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Button = styled(AppButton)`
    ${tw`w-10 h-10 p-1 px-2 flex-col justify-evenly rounded-md hidden md:flex`}
`

export const Line = styled.span`
    ${tw`w-full h-1 rounded-md`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`
