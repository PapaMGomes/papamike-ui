import { AppContainer, AppFormGroup } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center`}
`

export const Title = styled.p`
    ${tw`font-bold text-lg mb-4`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    ${tw`mb-4 sm:text-center`}
`

export const FormGroup = styled(AppFormGroup)`
    ${tw`w-3/5`}

    > input {
        ${tw`rounded-full`}
    }
`

export const Input = styled.input``
