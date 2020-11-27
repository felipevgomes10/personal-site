import styled from 'styled-components'

export const AboutText = styled.p`
  width: 50%;
  text-align: center;
  margin: 4rem;

  @media (max-width: 31.5em) {
    width: 90%;
  }
`

export const AboutLink = styled.a`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`
