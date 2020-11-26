import styled, { css } from 'styled-components'

export const Text = styled.p`
  color: ${props => props.theme.colors.error};
  margin-top: 2.6rem;

  ${props =>
    props.confirm &&
    css`
      color: ${props.theme.colors.confirmation};
    `}
`
