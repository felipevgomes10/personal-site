import styled, { css } from 'styled-components'
import { commonStyles, label, onFocus } from '../commonStyles'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  ${props =>
    props.otherWrapper &&
    css`
      flex-direction: row;
    `}
`

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
      margin: ${({ marginInput }) => marginInput};

      @media (max-width: 50em) {
        font-size: 1.36rem;
        width: initial;
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
