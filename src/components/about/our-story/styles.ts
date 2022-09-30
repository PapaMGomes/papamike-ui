import styled from 'styled-components'
import { AppContainer } from '@/styles/css/ts/components'
import tw from 'twin.macro'
import { fadeIn } from '@/styles/animation'

export const WraperContainer = styled.section`
    ${tw`mt-4 py-4`}
    background: ${({ theme }) => theme.colors.yellow};
`

export const Container = styled(AppContainer)``

export const Title = styled.p`
    ${tw`text-lg font-bold mb-4`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p.attrs(fadeIn.left)`
    ${tw`min-h-[100px] text-center text-[1.4rem] pb-6`}
    color: ${({ theme }) => theme.colors.primary};
`
