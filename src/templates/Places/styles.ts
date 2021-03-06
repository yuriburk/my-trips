import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.sizes.large} ${({ theme }) => theme.sizes.medium};
`

export const Content = styled.div`
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

  img {
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
