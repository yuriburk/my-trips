import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 1100;
  top: ${({ theme }) => theme.sizes.medium};
  right: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  svg {
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
    transition: color 0.2s ease-in-out;
  }
`
