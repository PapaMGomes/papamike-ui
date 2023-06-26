import styled from 'styled-components'
import tw from 'twin.macro'

interface ContainerProps {
    padding?: string
}
export const Container = styled.section<ContainerProps>`
    ${tw`w-full h-full`}

    .splide {
        padding: ${({ padding }) => padding} !important;
    }
`

export const Slide = styled.article`
    ${tw`text-center h-full`}
`
