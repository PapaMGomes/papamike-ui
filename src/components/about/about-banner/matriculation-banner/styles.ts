import Blob from '@/assets/images/elements/simple-blob.png'
import StudentImage from '@/assets/images/student.png'
import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Card = styled.article`
    ${tw`p-10 rounded-3xl h-64 shadow-md grid grid-cols-3`}
    ${tw`sm:flex flex-col sm:shadow-[inset 0 0 0 2000px #00000057}]`}

    background: ${() => `
        url(${StudentImage}) right center no-repeat,
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

export const Title = styled.p`
    ${tw`text-lg w-full transition-all duration-500 sm:text-base`}
    text-shadow: 2px 2px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgSecondary};
    font-weight: 900;
`

export const Text = styled.b`
    ${tw`mt-2`}
    font-weight: 900;
    color: ${({ theme }) => theme.colors.bgSecondary};
    text-shadow: 2px 2px ${({ theme }) => theme.colors.primary};
`

export const Article = styled.article`
    ${tw`flex flex-col justify-center items-center`}
`

export const Button = styled(AppButton)`
    ${tw`px-8 mt-2 uppercase w-64 sm:mt-4`}
    font-weight: 900;
`
