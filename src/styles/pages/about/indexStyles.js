import styled from 'styled-components'

export const AboutText = styled.p`
  text-align: center;
`

export const AboutLink = styled.a`
  line-height: 0;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

export const AboutTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.font};
`
