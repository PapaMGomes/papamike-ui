import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`w-full py-4 flex items-center justify-center`}
`

export const Text = styled.p`
    ${tw`ml-4`}
`

export const Button = styled.button`
    ${tw`ml-4 cursor-pointer bg-transparent`}

    > svg {
        ${tw`font-bold text-lg`}
        color: ${({ theme }) => theme.colors.primary};
    }
`
