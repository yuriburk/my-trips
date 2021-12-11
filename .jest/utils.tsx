import {render} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import {theme} from '../src/styles/theme'
import GlobalStyle from '../src/styles/global'

export const renderWithThemeProvider = (component: JSX.Element) => render(<ThemeProvider theme={theme}>{component}<GlobalStyle /></ThemeProvider>)
