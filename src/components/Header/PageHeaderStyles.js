import styled, { css } from 'styled-components'

const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = styled.header`
  ${flex};
  width: 100%;
  height: 8.8rem;
  background: ${props => props.theme.colors.background};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 5rem;

  & svg {
    height: 5rem;
  }

  & .headerAdm {
    ${flex};
  }

  & a,
  & p,
  & button {
    font-size: 1.8rem;
    transition: 0.3s;
  }

  & button {
    border: none;
    outline: none;
    background: none;
    margin-left: 5px;
    color: ${props => props.theme.colors.font};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  & a.active,
  & a:hover {
    color: ${props => props.theme.colors.primary};
  }

  & .avatar {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 2rem;
  }
`
