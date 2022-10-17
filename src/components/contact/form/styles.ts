import tw from 'twin.macro'
import styled from 'styled-components'
import {
    AppButton,
    AppContainer,
    AppFormGroup
} from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`flex`}
`

export const FormContainer = styled.section`
    ${tw`w-full`}
`

export const ImageContainer = styled.section`
    ${tw`w-3/5 ml-10 pb-3 flex items-end md:hidden`}
`

export const Image = styled.img``

export const Nav = styled.nav`
    ${tw`my-8 flex justify-between`}
`

export const Article = styled.article``

export const Title = styled.p`
    ${tw`text-lg font-bold`}
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p``

export const Form = styled.form``

export const FormGroup = styled(AppFormGroup)``

export const Label = styled.label``

export const Input = styled.input``

export const Textarea = styled.textarea``

export const Span = styled.span``

export const Button = styled(AppButton)`
    ${tw`pl-6 pr-5 min-w-[100px] uppercase font-bold flex items-center justify-center`}

    > svg {
        ${tw`text-[1.2rem] ml-2`}
    }
`
