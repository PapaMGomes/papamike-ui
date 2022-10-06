import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`h-16 flex shadow-md items-center justify-around rounded-full`}
    background: ${({ theme }) => theme.colors.primary};
`

interface ButtonProps {
    isActive?: boolean
}
export const Button = styled(AppButton)<ButtonProps>`
    ${tw`px-6 min-w-[155px] mr-6 text-base`}

    color: ${({ isActive, theme }) =>
        isActive ? theme.colors.yellow : theme.colors.bgSecondary};
`
