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
    width: 100%;
  }

  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primaryLight},
      0 0 0 3px ${props => props.theme.colors.primary};
  }

  &:disabled {
    background: ${props => props.theme.colors.primaryLight};
    cursor: wait;
  }

  &.ButtonAsLink {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.fontOnPrimary};

    & svg {
      margin-left: 5px;
      fill: currentColor;

      & > * {
        fill: currentColor;
        stroke-width: 1.7px;
      }
    }
  }
`
