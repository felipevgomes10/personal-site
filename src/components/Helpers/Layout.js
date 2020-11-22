import styled, { css } from 'styled-components'

export const Layout = styled.section`
  min-height: calc(100vh - 8.8rem - 6.8rem - 5.5rem);
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: ${({ justify }) => justify};
      align-items: ${({ align }) => align};
      flex-direction: ${({ direction }) => direction};
      flex-wrap: ${({ wrap }) => wrap};
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

    ${props =>
    props.gridItem &&
    css`
      grid-column: ${({ column }) => column};
      grid-row: ${({ row }) => row};
      justify-self: ${({ justifySelf }) => justifySelf};
      align-self: ${({ alignSelf }) => alignSelf};
    `}

    ${props =>
    props.flexItem &&
    css`
      align-self: ${({ alignSelf }) => alignSelf};
      flex: ${({ flexOptions }) => flexOptions};
    `}

    ${props =>
    props.resetHeight &&
    css`
      min-height: initial;
      height: ${({ height }) => height};
    `}
`
