import styled, { css } from 'styled-components'

const flex = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Nav = styled.nav`
  ${flex};
  justify-content: center;
  background: ${props => props.theme.colors.secondary};
  height: 5.5rem;
  width: 100%;
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
  border-color: ${props => props.theme.colors.border};

  & .NavBarWrapper {
    ${flex};
    width: 40%;

    @media (max-width: 48em) {
      width: 50%;
    }
  }

  & .NavBarWrapper a {
    font-weight: 700;
    font-size: 1.9rem;
    transition: 0.2s;

    &:hover,
    &.active {
      color: ${props => props.theme.colors.primary};
    }
  }
`
