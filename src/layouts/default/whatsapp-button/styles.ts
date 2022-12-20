import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Button = styled.a`
    ${tw`sm:right-2 sm:bottom-2`}
    ${tw`z-10 w-16 h-16 text-lg fixed bottom-8 right-8 flex items-center justify-center cursor-pointer rounded-full`}
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
`
