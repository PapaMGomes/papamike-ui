import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '../css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`h-screen`}
`

export const Image = styled.img`
    ${tw`w-full h-[300px] object-cover rounded-3xl`}
`

export const Content = styled.article``
