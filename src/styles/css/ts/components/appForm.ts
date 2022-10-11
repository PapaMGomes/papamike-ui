import tw from 'twin.macro'
import styled from 'styled-components'
import { rgba } from 'polished'

export const AppFormGroup = styled.div`
    ${tw`w-auto mb-5`}

    > label {
        ${tw`block mb-2`}
    }

    > input,
    > select,
    > textarea {
        ${tw`w-full h-11 block rounded py-1 px-3 border border-solid`}
        color: ${props => props.theme.colors.text};
        text-rendering: optimizeLegibility !important;
        background: ${({ theme }) => rgba(theme.colors.bgPrimary, 0.6)};

        &:focus {
            ${tw`outline-none border border-solid`}
            border-color: ${props => props.theme.colors.primary};
        }
    }

    > textarea {
        ${tw`h-auto`}
    }

    > span {
        ${tw`text-sm absolute mt-0.5`}
        color: ${props => props.theme.colors.red};
    }
`
