import Blob from '@/assets/images/elements/simple-blob.png'
import StudentImage from '@/assets/images/student.png'
import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Card = styled.article`
    ${tw`p-10 rounded-3xl h-64 shadow-md relative`}
    ${tw`md:flex-col flex justify-center md:h-[42vh] md:shadow-[inset 0 0 0 2000px #00000057}]`}

    background: ${({ theme }) => `
        url(${StudentImage}) right top  no-repeat,
        url(${Blob}) left center no-repeat,

        linear-gradient(
            90deg,
            ${theme.colors.yellow} 50%,
            ${theme.colors.primary} 50%
        )
    `};

    color: ${({ theme }) => theme.colors.bgPrimary};

    &:hover {
        > p {
            ${tw`text-[1.4rem]`}
        }
    }
`

export const TitleContainer = styled.article`
    ${tw`w-64 flex flex-col absolute left-[8%] top-[24%] md:w-auto md:relative md:left-auto md:top-auto`}
`

export const TextContainer = styled.div`
    ${tw`flex flex-col justify-start`}
`

export const Title = styled.p`
    ${tw`text-[2.30rem] text-center w-full transition-all duration-500 md:text-base md:text-white`}
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'montserrat-extra';
    line-height: 2rem;
`

export const Text = styled.p`
    ${tw`mt-2 w-full md:text-white`}
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
`

export const Article = styled.article`
    ${tw`pl-8 flex flex-col justify-center items-center relative md:pl-0`}
`

export const Button = styled(AppButton)`
    ${tw`px-8 mt-8 uppercase w-64`}
    font-weight: 900;
`
