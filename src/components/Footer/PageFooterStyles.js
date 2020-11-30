import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: 9.8rem;

  & p,
  & span {
    display: block;
    color: ${props => props.theme.colors.fontOnPrimary};
  }
`
