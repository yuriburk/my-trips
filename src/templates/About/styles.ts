import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  max-width: ${({ theme }) => theme.sizes.container};
  margin: auto;
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: ${({ theme }) => theme.sizes.large};
`

export const Body = styled.div`
  font-size: ${({ theme }) => theme.sizes.medium};
`
