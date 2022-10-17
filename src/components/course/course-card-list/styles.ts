import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Title = styled.p`
    ${tw`font-bold mb-8 text-lg`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Container = styled.section`
    ${tw`mb-8 lg:min-h-[100vh] grid gap-8 grid-cols-4 md:grid-cols-2 md:gap-4 md:mt-8`}
`

export const Image = styled.img`
    ${tw`w-full h-32 mb-4 rounded-2xl shadow-md object-cover md:h-52`}
`

export const Card = styled.div`
    ${tw`p-4 rounded-2xl shadow-md flex flex-col items-center justify-center `}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const CardTitle = styled.p`
    ${tw`font-bold mb-2 text-center`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Button = styled(AppButton)`
    ${tw`w-full uppercase font-bold mt-auto`}
`
