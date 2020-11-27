import styled from 'styled-components'

export const Btn = styled.button`
  display: block;
  padding: 0;
  outline: none;
  border: none;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.fontOnPrimary};
  height: 4.6rem;
  width: 13.1rem;
  font-size: 1.9rem;
  border-radius: 7px;
  margin: ${({ margin }) => margin};
  transition: 0.1s;
  cursor: pointer;

  @media (max-width: 50em) {
    width: 30.7rem;
  }

  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primaryLight},
      0 0 0 3px ${props => props.theme.colors.primary};
  }

  &:disabled {
    background: ${props => props.theme.colors.primaryLight};
    cursor: wait;
  }
`
