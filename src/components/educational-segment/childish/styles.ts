import tw from 'twin.macro'
import styled from 'styled-components'
import BlobYellow from '@/assets/images/elements/blob-yellow.png'
import StainYellow from '@/assets/images/elements/stain-yellow.png'
import { fadeIn } from '@/styles/animation'

export const ContainerHeaven = styled.section.attrs(fadeIn.left)`
    ${tw`min-h-[500px]`}
    animation: animation-haven 1s ease-in-out both;

    @keyframes animation-haven {
        0% {
            background: ${`url(${StainYellow})`} calc(50% - 600px) 0px / 0px
                    no-repeat,
                ${`url(${StainYellow})`} calc(50% + 550px) 20% / 0px no-repeat;
        }
        100% {
            background: ${`url(${StainYellow})`} calc(50% - 600px) 0px / 50px
                    no-repeat,
                ${`url(${StainYellow})`} calc(50% + 550px) 20% / 120px no-repeat;
        }
    }
`

export const ContainerBlob = styled.section`
    ${tw`min-h-[500px]`}

    background: ${`url(${StainYellow})`} 10px 0px / 50px no-repeat,
                ${`url(${BlobYellow})`} 130% 50% / 900px 800px no-repeat;
`

export const ContainerSimpleStar = styled.section`
    ${tw`min-h-[500px]`}
    animation: animation-simple 1s ease-in-out both;

    @keyframes animation-simple {
        0% {
            background: ${`url(${StainYellow})`} 10px 0px / 0px no-repeat;
        }
        100% {
            background: ${`url(${StainYellow})`} 10px 0px / 50px no-repeat;
        }
    }
`
