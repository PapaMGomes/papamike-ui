import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)``

export const Content = styled.article`
    ${tw`flex items-center justify-between`}
`

export const TextContainer = styled.div`
    ${tw`w-full`}
`

export const Title = styled.p`
    ${tw`font-bold text-lg mb-4`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`mb-4 sm:text-center`}
`

export const Figure = styled.figure`
    ${tw`w-2/5 flex flex-col items-center justify-center`}

    > img {
        &:first-of-type {
            ${tw`w-3/5`}
        }
        &:last-of-type {
            ${tw`relative bottom-10`}
        }
    }
`

export const Image = styled.img`
    ${tw`w-2/5`}
`
