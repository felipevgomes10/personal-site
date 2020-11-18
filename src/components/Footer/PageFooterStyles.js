import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: 6.8rem;

  & p {
    color: ${props => props.theme.colors.fontOnPrimary};
  }
`
