import Blob from '@/assets/images/elements/simple-blob.png'
import StudentImage from '@/assets/images/student.png'
import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Card = styled.article`
    ${tw`p-10 rounded-3xl h-64 shadow-md flex flex-col justify-center items-center`}

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
    ${tw`text-lg w-full transition-all duration-500`}
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 900;
`

export const Text = styled.h5`
    ${tw`mt-2`}
`

export const Button = styled(AppButton)`
    ${tw`px-8 mt-2 uppercase`}
    font-weight: 900;
`
