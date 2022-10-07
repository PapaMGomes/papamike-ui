import { AppContainer } from '@/styles/css/ts/components'
import { bounceIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)``

export const Spacing = styled.br``

export const BannerContent = styled.div`
    ${tw`h-full w-full flex items-center justify-center`}
`

export const BannerTitle = styled.p.attrs(bounceIn.down)`
    ${tw`text-lg py-2 font-bold uppercase`}
    color: ${({ theme }) => theme.colors.bgSecondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
`
