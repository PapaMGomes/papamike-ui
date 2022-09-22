import { AppButton } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`mb-2 relative`}

    * {
        ${tw`transition-all`}
    }
`

export const Title = styled.p`
    ${tw`text-base py-4 cursor-pointer flex items-center justify-between`}
    color: ${({ theme }) => theme.colors.white};
`

interface ContentProps {
    isShowSubMenu?: boolean
}
export const Content = styled.div.attrs(fadeIn.default)<ContentProps>`
    ${tw`px-6`}
    border-left: ${({ theme, isShowSubMenu }) =>
        isShowSubMenu ? `1px solid ${theme.colors.white}` : 'none'};
`

export const Text = styled.span``

export const Link = styled.a``

interface ButtonProps {
    isShowSubMenu?: boolean
}
export const Button = styled(AppButton)<ButtonProps>`
    ${tw`p-0 text-xl flex items-center bg-transparent`}

    > svg {
        ${tw`transition-all duration-500`}
        rotate: ${({ isShowSubMenu }) => (isShowSubMenu ? '90deg' : '')};
    }
`
