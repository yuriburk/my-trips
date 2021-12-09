import { render, screen } from '@testing-library/react'

import Map, { Place } from 'components/Map'

describe('<Map />', () => {
  it('should be able to render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should be able to render with the marker in correct place', () => {
    const places = [
      {
        id: 1,
        name: 'Cidade',
        slug: 'cidade',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: 2,
        name: 'Bairro',
        slug: 'bairro',
        location: {
          latitude: 0,
          longitude: 0
        }
      }
    ] as Place[]
    render(<Map places={places} />)

    expect(screen.getByTitle(/cidade/i)).toBeInTheDocument()
    expect(screen.getByTitle(/bairro/i)).toBeInTheDocument()
  })
})
