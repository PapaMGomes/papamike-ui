import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`flex items-center justify-between md:grid md:gap-2 md:grid-cols-2 md:w-full`}
`

interface ButtonProps {
    isActive?: boolean
}
export const Button = styled(AppButton)<ButtonProps>`
    ${tw`mr-4 min-w-[155px] md:mr-0`}

    &:last-of-type {
        ${tw`mr-0`}
    }

    color: ${({ theme, isActive }) =>
        isActive ? theme.colors.yellow : theme.colors.white};
`
