import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'

export const HeaderContainer = styled.header`
    ${tw`fixed w-full`}
    height: ${({ theme }) => theme.spacing.headerHeight};
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Container = styled(AppContainer)`
    ${tw`flex justify-between items-center`}
`

export const ImageContainer = styled.figure``

export const Image = styled.img.attrs(fadeIn.left)`
    ${tw`w-32 sm:w-20 sm:h-12`}
`

export const Content = styled.article.attrs(fadeIn.down)`
    ${tw`flex items-center md:hidden`}
`

export const Button = styled(AppButton).attrs(fadeIn.right)`
    ${tw`p-1 pl-4 flex items-center justify-between transition-all duration-500 md:hidden`}

    > svg {
        ${tw`text-xl ml-2`}
    }
`

export const HamburgerButton = styled(AppButton).attrs(fadeIn.right)`
    ${tw`w-10 h-10 p-1 px-2 flex-col justify-evenly rounded-md hidden md:flex`}
`

export const LineButton = styled.span`
    ${tw`w-full h-1 rounded-md`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const ImageIcon = styled.img`
    ${tw`w-5 mr-2`}
`
