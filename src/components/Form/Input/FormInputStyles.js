import styled, { css } from 'styled-components'
import { commonStyles, label, onFocus } from '../commonStyles'

export const Input = styled.input`
  ${commonStyles}
  height: 5rem;

  ${props =>
    props.other &&
    css`
      background: initial;
      border: initial;
      width: initial;
      height: initial;
      padding: 0.5rem;
    `}

  &:focus {
    ${onFocus}
  }
`

export const Label = styled.label`
  ${label}
`
