import { AppButton, AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`flex flex-col my-10 relative`}
`

export const Title = styled.p`
    ${tw`font-bold text-lg flex items-center justify-between`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Map = styled.iframe`
    ${tw`shadow-lg rounded-lg w-4/5 h-48 mt-6 border-none mb-5`}
`

export const Button = styled(AppButton)`
    ${tw`bg-transparent text-xl`}

    > svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const ImageSlide = styled.img`
    ${tw`w-80 rounded-2xl shadow transition-all duration-500 sm:w-full`}
`
