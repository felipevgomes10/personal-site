import styled from 'styled-components'
import { commonStyles, onFocus } from '../commonStyles'

export const TextArea = styled.textarea`
  ${commonStyles}
  display: block;
  height: 9.5rem;
  resize: none;

  &:focus {
    ${onFocus}
  }
`
