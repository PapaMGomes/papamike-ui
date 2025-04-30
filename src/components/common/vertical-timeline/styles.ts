import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`relative mx-auto my-[50px] py-10 w-full max-w-[900px]`}
`

export const Line = styled.div`
    ${tw`absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2`}
    background: #e0e0e0;
`

export const ItemContainer = styled.div<{ side: 'left' | 'right' }>`
    ${tw`relative w-full flex items-center my-10`}
    justify-content: ${({ side }) =>
        side === 'left' ? 'flex-start' : 'flex-end'};

    @media (max-width: 768px) {
        ${tw`justify-center text-center`}

        > div {
            ${tw`items-center`}
        }
    }
`

export const Dot = styled.div`
    ${tw`absolute left-1/2 w-5 h-5 rounded-full transform -translate-x-1/2 z-[2]`}
    background: ${({ theme }) => theme.colors.primary};
    transform: translate(-50%, 0);

    @media (max-width: 768px) {
        ${tw`hidden`}
    }
`

export const LeftContent = styled.div`
    ${tw`w-[45%] flex flex-col items-end pr-[30px] justify-center`}

    @media (max-width: 768px) {
        ${tw`w-4/5 pr-0 items-center`}
    }
`

export const RightContent = styled.div`
    ${tw`w-[45%] flex flex-col items-start justify-center pl-[30px]`}

    @media (max-width: 768px) {
        ${tw`w-4/5 pl-0 items-center`}
    }
`

export const Content = styled.div`
    ${tw`p-6 rounded-[10px] text-[0.8rem]`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Year = styled.div`
    ${tw`font-bold text-[22px] mb-[10px] w-full text-center`}
`
