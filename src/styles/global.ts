import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.background};
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p {
    font-size: 2rem;
    line-height: ${({ theme }) => theme.sizes.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.highlight};
  }
`

export default GlobalStyle
