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
  position: relative;

  & .NavBarWrapper {
    ${flex};
    width: 40%;
    transition: 0.3s;

    @media (max-width: 48em) {
      width: 50%;
    }

    @media (max-width: 50em) {
      align-items: flex-start;
      flex-direction: column;
      position: absolute;
      top: 46px;
      right: 50px;
      z-index: 100;
      width: auto;
      background: ${props => props.theme.colors.background};
      padding: 1.5rem 2.5rem;
      box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      opacity: 0;
      pointer-events: none;

      &.NavBarWrapperActive {
        opacity: 1;
        pointer-events: initial;
        right: 21px;
      }
    }
  }

  & .NavBarWrapper a:not(:last-child) {
    margin-right: 3rem;
  }

  & .NavBarWrapper a,
  & .NavBarWrapper button {
    ${flex}
    justify-content: flex-start;
    font-weight: 400;
    font-size: 1.9rem;
    background: none;
    border: none;
    transition: 0.2s;

    &:hover,
    &.active {
      color: ${props => props.theme.colors.primary};
    }

    & svg {
      display: none;
      margin-right: 2rem;
      width: 20px;
      height: 20px;

      &.NavBarShowSvg {
        display: initial;
      }
    }

    @media (max-width: 50em) {
      width: 100%;
      padding: 1rem 0;
      font-size: 2rem;

      &:not(:last-child) {
        border-bottom: 1px solid #dddddd;
      }
    }
  }

  & .NavBarMobile {
    ${flex};
    justify-content: center;
    width: 30px;
    height: 27px;
    box-shadow: 0 0 0 1.5px #333333;
    border: none;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary};
    position: absolute;
    right: 21px;

    &:focus {
      outline: none;
    }

    & span {
      display: block;
      background: #333333;
      width: 16px;
      height: 2px;
      box-shadow: 0 5px 0 0 #333333, 0 -5px 0 0 #333333;
      transition: 0.3s;
    }
  }

  & button.NavBarBtnActive {
    outline-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 1.5px ${props => props.theme.colors.primary};
  }

  & button.NavBarBtnActive span {
    transform: rotate(90deg);
    border-radius: 50%;
    width: 3px;
    height: 3px;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 5px 0 0 ${props => props.theme.colors.primary},
      0 -5px 0 0 ${props => props.theme.colors.primary};
  }
`
