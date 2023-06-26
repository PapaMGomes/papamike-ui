import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`pb-8 sm:pb-20`}
`

export const ImageSlide = styled.img`
    ${tw`max-w-[320px] h-full rounded-2xl shadow transition-all duration-500 sm:w-full`}
`
