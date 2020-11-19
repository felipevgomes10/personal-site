import styled from 'styled-components'

export const Input = styled.input`
  background: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 9px;
  width: 30.7rem;
  height: 5rem;
  padding: 1rem;
  font-size: 1.6rem;
  transition: 0.3s;
  color: ${props => props.theme.colors.font};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${props => props.theme.colors.primary};
  }
`

export const Label = styled.label`
  display: block;
  font-size: 2rem;
  color: ${props => props.theme.colors.font};
  margin: ${({ margin }) => margin};
`
