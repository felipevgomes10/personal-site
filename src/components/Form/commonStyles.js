import { css } from 'styled-components'

export const commonStyles = css`
  background: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 9px;
  width: 30.7rem;
  padding: 1rem;
  font-size: 1.6rem;
  transition: 0.3s;
  color: ${props => props.theme.colors.font};

  @media (max-width: 50em) {
    width: 100%;
  }
`

export const onFocus = css`
  outline: none;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.primary};
`

export const label = css`
  display: block;
  font-size: 2rem;
  color: ${props => props.theme.colors.font};
  margin: ${({ margin }) => margin};
`
