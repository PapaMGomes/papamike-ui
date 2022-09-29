import tw from 'twin.macro'
import styled from 'styled-components'

interface AppContainerProps {
    paddingTop?: boolean
}

export const AppContainer = styled.section<AppContainerProps>`
    ${tw`container mx-auto px-10`}
    padding-top: ${props => {
        return props.paddingTop
            ? `calc(
                ${props.theme.spacing.menuHeight} +
                ${props.theme.spacing.headerHeight} +
                1rem)
            `
            : '1rem'
    }};

    @media (max-width: 890px) {
        padding-top: ${props => {
            return props.paddingTop
                ? `calc(${props.theme.spacing.headerHeight} + 1rem)`
                : '1rem'
        }};
    }

    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`
