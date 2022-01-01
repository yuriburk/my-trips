import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.large} ${({ theme }) => theme.sizes.medium};
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container};
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: ${({ theme }) => theme.sizes.medium};
`

export const Body = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.large};

  p {
    ${({ theme }) => theme.sizes.medium}
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.medium};
`
