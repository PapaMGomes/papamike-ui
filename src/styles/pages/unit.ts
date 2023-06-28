import styled from 'styled-components'
import { AppContainer } from '@/styles/css/ts/components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)``

export const Content = styled.div`
    ${tw`grid gap-8 grid-cols-3 sm:grid-cols-1`}
`

export const Title = styled.h1`
    ${tw`mb-8`}
`

export const Card = styled.article`
    ${tw`rounded-xl shadow-md p-4`}
    background:${({ theme }) => theme.colors.bgSecondary};
`

export const Image = styled.img`
    ${tw`h-44 w-full object-cover rounded-xl`}
`

export const CardTitle = styled.h4`
    ${tw`font-bold my-4`}
`

export const CardText = styled.p``

export const CardFooter = styled.section`
    ${tw`mt-8 w-full flex items-center justify-between`}
`

export const Link = styled.a`
    ${tw`font-bold cursor-pointer flex items-center sm:justify-center`}
    color: ${({ theme }) => theme.colors.primary};

    > svg {
        ${tw`ml-2 text-[1.3rem]`}
    }

    /* &:first-of-type {
        color: ${({ theme }) => theme.colors.green};
    } */
`
