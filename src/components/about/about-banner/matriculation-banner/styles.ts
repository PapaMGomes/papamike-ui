import Blob from '@/assets/images/elements/simple-blob.png'
import StudentImage from '@/assets/images/student.png'
import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Card = styled.article`
    ${tw`p-10 rounded-3xl h-64 shadow-md`}
    ${tw`sm:flex flex-col justify-center sm:h-[42vh] sm:shadow-[inset 0 0 0 2000px #00000057}]`}

    background: ${() => `
        url(${StudentImage}) right top  no-repeat,
        url(${Blob}) left center no-repeat
    `};

    color: ${({ theme }) => theme.colors.bgPrimary};
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
        > p {
            ${tw`text-[1.4rem]`}
        }
    }
`

export const TextContainer = styled.div`
    ${tw`flex flex-col justify-start`}
`

export const Title = styled.p`
    ${tw`text-lg w-full transition-all duration-500 sm:text-base sm:text-white`}
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 900;
`

export const Text = styled.p`
    ${tw`mt-2 w-full sm:text-white`}
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
`

export const Article = styled.article`
    ${tw`flex flex-col justify-center items-center relative`}
`

export const Button = styled(AppButton)`
    ${tw`px-8 mt-4 uppercase w-64`}
    font-weight: 900;
`
