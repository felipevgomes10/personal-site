import styled, { css } from 'styled-components'

export const Layout = styled.div`
  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: ${({ justify }) => justify};
      align-items: ${({ align }) => align};
      flex-direction: ${({ direction }) => direction};
    `}

  ${props =>
    props.grid &&
    css`
      display: grid;
      grid-template-columns: ${({ columns }) => columns};
      grid-template-rows: ${({ rows }) => rows};
      justify-items: ${({ justify }) => justify};
      align-items: ${({ align }) => align};
      justify-content: ${({ justifyC }) => justifyC};
      align-content: ${({ alignC }) => alignC};
      row-gap: ${({ rowGap }) => rowGap};
      column-gap: ${({ columnGap }) => columnGap};
    `}
`
