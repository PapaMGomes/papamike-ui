import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`h-16 rounded-full`}
    background: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.article`
    ${tw`sm:overflow-x-auto sm:pl-44 sm:pt-4`}
    ${tw`h-full w-full flex shadow-md items-center justify-around rounded-full`}

    &::-webkit-scrollbar {
        width: 0px;
    }
`
interface ButtonProps {
    isActive?: boolean
}
export const Button = styled(AppButton)<ButtonProps>`
    ${tw`sm:min-w-[auto] sm:px-2 sm:mr-4`}
    ${tw`px-6 min-w-[155px] mr-6 font-bold text-base uppercase h-14 flex items-center justify-center whitespace-nowrap`}

    background: ${({ isActive, theme }) =>
        isActive ? theme.colors.yellow : 'transparent'};
    color: ${({ isActive, theme }) =>
        isActive ? theme.colors.primary : theme.colors.bgSecondary};
`
