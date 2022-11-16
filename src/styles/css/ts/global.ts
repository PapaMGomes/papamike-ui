import 'react-toastify/dist/ReactToastify.css'
import '@splidejs/react-splide/css/sea-green'
import 'animate.css'

import { createGlobalStyle } from 'styled-components'
import { darken, lighten } from 'polished'
import tw from 'twin.macro'

export default createGlobalStyle`
  @font-face {
    font-style: bold;
    font-weight: 900;
    font-display: swap;
    font-family: 'montserrat-extra';
    src: url('/fonts/Montserrat-ExtraBold.woff') format('woff');
  }

   :root {
    --toastify-color-dark: ${props => props.theme.colors.bgSecondary};
   }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${tw`text-base font-bold`}
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.bgPrimary};
  }

  html {
    scroll-behavior: smooth;
  }

  button {
    ${tw`border-0`}
  }

  #__next {
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text}
  }

  /* #region: SPLIPE */
  .splide__arrow svg {
    fill: ${({ theme }) => theme.colors.primary};

    &:hover {
        fill: ${({ theme }) => darken(0.1, theme.colors.primary)} !important;
    }
  }
  .splide__pagination__page.is-active {
    background: ${({ theme }) => theme.colors.primary} !important;
  }
  .splide__pagination__page:hover {
    background: ${({ theme }) => lighten(0.3, theme.colors.primary)} !important;
  }
  .splide__pagination {
    top: 100% !important;
  }
  /* #endregion: SPLIPE */
`
