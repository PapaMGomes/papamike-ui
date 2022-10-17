import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`grid gap-10 grid-cols-2 md:flex flex-col`}
`

export const Card = styled.article`
    ${tw`p-8 shadow-md rounded-2xl flex items-center sm:flex-col`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const ImageContainer = styled.figure`
    ${tw`flex flex-col items-center mr-8 sm:mr-0 sm:mb-8`}
`

export const Image = styled.img`
    ${tw`mb-4 w-36 h-36 rounded-full object-cover`}
`

export const CardContent = styled.div``

export const Title = styled.p`
    ${tw`font-bold text-lg sm:text-center`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`my-4 sm:text-center`}
`

export const Link = styled.a`
    ${tw`font-bold cursor-pointer flex items-center sm:justify-center`}
    color: ${({ theme }) => theme.colors.primary};

    > svg {
        ${tw`ml-2 text-[1.3rem]`}
    }
`

export const Map = styled.iframe`
    ${tw`shadow-lg rounded-lg w-4/5 h-48 mt-6 border-none mb-5`}
`
