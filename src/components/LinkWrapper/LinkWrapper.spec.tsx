import { screen } from '@testing-library/react'

import { renderWithThemeProvider } from '../../../.jest/utils'
import LinkWrapper from 'components/LinkWrapper'

describe('<LinkWrapper />', () => {
  it('should be able to render link and children', () => {
    renderWithThemeProvider(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()

    expect(children).toHaveAttribute('href', '/my-link')
  })
})
