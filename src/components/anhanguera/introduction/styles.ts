import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`mb-8`}
`

export const Content = styled.article`
    ${tw`flex items-start justify-between sm:flex-col-reverse sm:items-center`}
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
    ${tw`w-2/5 flex flex-col items-center justify-center sm:w-full sm:mb-8`}

    > p {
        ${tw`mb-0 font-bold`}

        &:last-of-type {
            color: ${({ theme }) => theme.colors.orange};
        }
    }
`

export const Image = styled.img`
    ${tw`w-2/5 mb-2`}
`
