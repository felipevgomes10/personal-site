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

  & p {
    font-size: 1.8rem;
  }

  & .avatar {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 2rem;
  }
`