import styled, { css } from 'styled-components'
import { commonStyles, label, onFocus } from '../commonStyles'

export const Input = styled.input`
  ${commonStyles}
  height: 5rem;

  ${props =>
    props.other &&
    css`
      display: ${({ display }) => display};
      background: initial;
      border: initial;
      width: initial;
      height: initial;
      padding: 0.5rem;

      @media (max-width: 50em) {
        font-size: 1.36rem;
      }
    `}

  &:focus {
    ${onFocus}
  }
`

export const Label = styled.label`
  ${label}

  ${props =>
    props.labelInline &&
    css`
      display: inline-block;
    `}
`
