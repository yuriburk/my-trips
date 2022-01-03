import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    background-color: ${({ theme }) => theme.colors.background};
  }
`
