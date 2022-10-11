import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)``

export const Title = styled.p`
    ${tw`mb-4 font-bold text-lg cursor-default sm:text-center`}
    color: ${({ theme }) => theme.colors.primary};

    &:last-of-type {
        ${tw`mt-10`}
    }
`

export const Text = styled.p`
    ${tw`mb-3 sm:text-center`}
`

export const ItemsContainer = styled.article`
    ${tw`mb-10 grid gap-8 grid-cols-2 sm:flex flex-col`}
`

export const Card = styled.div`
    ${tw`p-4 px-6 rounded-xl shadow-md flex items-center`}
    background: ${({ theme }) => theme.colors.bgSecondary};

    &:last-of-type {
        ${tw`mb-0`}
    }
`

export const CardText = styled.p`
    ${tw`text-center`}
`

export const GalleryContainer = styled(AppContainer)`
    ${tw`pb-5`}
`

export const ImageSlide = styled.img`
    ${tw`w-80 rounded-2xl shadow transition-all duration-500 sm:w-full`}
`
