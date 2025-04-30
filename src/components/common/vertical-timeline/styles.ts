import tw from 'twin.macro'
import styled from 'styled-components'
import BubbleBG from '@/assets/background/bubble.png'

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
    border: 3px solid ${({ theme }) => theme.colors.bgSecondary};
    outline: 3px solid ${({ theme }) => theme.colors.primary};

    @media (max-width: 768px) {
        ${tw`hidden`}
    }
`

export const Content = styled.div`
    ${tw`relative p-6 rounded-3xl flex flex-col items-center justify-center font-bold rounded-xl cursor-pointer transition-all duration-700 sm:text-[66%]`}
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};
    overflow: hidden;

    &:before {
        content: '';
        ${tw`absolute top-0 left-0 w-full h-full`}
        background-image: url(${BubbleBG});
        background-repeat: no-repeat;
        background-position: left;
        background-size: 250%;
        transition: all 0.7s;
        z-index: 0;
        transform: scaleX(-1);
    }

    > * {
        position: relative;
        z-index: 1;
    }

    &:hover {
        transform: scale(0.95);

        &:before {
            background-size: 130%;
        }
    }
`

export const LeftContent = styled.div`
    ${tw`w-[45%] flex flex-col items-end pr-[30px] justify-center`}

    @media (max-width: 768px) {
        ${tw`w-full pr-0 items-center`}
    }
`

export const RightContent = styled.div`
    ${tw`w-[45%] flex flex-col items-start justify-center pl-[30px]`}

    ${Content} {
        &:before {
            transform: scaleX(1);
        }
    }

    @media (max-width: 768px) {
        ${tw`w-full pl-0 items-center`}
    }
`

export const Year = styled.div`
    ${tw`font-bold text-[22px] mb-[10px] w-full text-center`}
    color: ${({ theme }) => theme.colors.secondary};
`
