import WaveYellow from '@/assets/images/elements/wave-yellow.png'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`pb-2 relative mt-28`}
    background: ${({ theme }) => theme.colors.yellow};
`

export const Waves = styled.article`
    ${tw`w-full h-28 absolute`}

    background: ${`url(${WaveYellow})`} top;
`
