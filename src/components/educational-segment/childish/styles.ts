import tw from 'twin.macro'
import styled from 'styled-components'
import BlobYellow from '@/assets/images/elements/blob-yellow.png'
import CloudYellow from '@/assets/images/elements/cloud-yellow.png'
import StarsYellow from '@/assets/images/elements/stars-yellow.png'

export const ContainerHeaven = styled.section`
    ${tw`min-h-[500px]`}
    animation: animation 1s ease-in-out both;

    @keyframes animation {
        0% {
            background: ${`url(${StarsYellow})`} 10px 0px / 0px no-repeat,
                ${`url(${StarsYellow})`} 90% 20% / 0px no-repeat,
                ${`url(${CloudYellow})`} 0% 50% / 0px no-repeat;
        }
        100% {
            background: ${`url(${StarsYellow})`} 10px 0px / 50px no-repeat,
                ${`url(${StarsYellow})`} 90% 20% / 85px no-repeat,
                ${`url(${CloudYellow})`} 8% 46% / 100px no-repeat;
        }
    }
`

export const ContainerBlob = styled.section`
    ${tw`min-h-[500px]`}

    background: ${`url(${StarsYellow})`} 10px 0px / 50px no-repeat,
                ${`url(${BlobYellow})`} 130% 50% / 900px 800px no-repeat;
`
