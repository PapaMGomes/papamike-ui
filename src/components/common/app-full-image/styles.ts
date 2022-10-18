import { bounceIn, fadeIn, zoomIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`fixed w-full h-full top-0 left-0 flex justify-center items-center z-30`}
    background: #000000a1;
`

export const Image = styled.img.attrs(zoomIn.default)`
    ${tw`rounded-2xl max-w-[88vw] max-h-[76vh]`}
`
