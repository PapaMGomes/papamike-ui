import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`pb-5`}
`

export const ImageSlide = styled.img`
    ${tw`w-80 rounded-2xl shadow transition-all duration-500`}
`
