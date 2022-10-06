import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/ts/components'
import { bounceIn } from '@/styles/animation'

export const Container = styled(AppContainer)``

export const Content = styled.div`
    ${tw`h-full w-full flex items-center justify-center`}
`

export const Title = styled.p.attrs(bounceIn.down)`
    ${tw`text-lg py-2 font-bold uppercase`}
    color: ${({ theme }) => theme.colors.bgSecondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
`
