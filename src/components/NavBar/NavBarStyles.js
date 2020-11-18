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

  & .NavBarWrapper {
    ${flex};
    width: 40%;

    @media (max-width: 48em) {
      width: 50%;
    }
  }

  & .NavBarWrapper a {
    font-size: 1.9rem;
  }
`
