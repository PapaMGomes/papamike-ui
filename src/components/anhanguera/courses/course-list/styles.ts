import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    ${tw`grid gap-8 grid-cols-4 mt-16 mb-8`}
`

export const Card = styled.div`
    ${tw`p-4 h-32 rounded-2xl shadow-md flex flex-col items-center justify-center`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const CardTitle = styled.p`
    ${tw`font-bold mb-2 text-center`}
    color: ${({ theme }) => theme.colors.primary};
`

export const CardSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.gray};
`
