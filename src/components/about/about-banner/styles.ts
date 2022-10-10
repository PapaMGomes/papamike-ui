import { AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer).attrs(fadeIn.down)`
    background-size: 100%;
    ${tw`pb-8`}
`
