import styled, { css, keyframes } from 'styled-components'

const fromLeft = keyframes`
from {
  transform: translateX(-30px);
  opacity: 0;
}
to {
  transform: initial;
  opacity: 1;
}
`

const fromTop = keyframes`
from {
  transform: translateY(-30px);
  opacity: 0;
}
to {
  transform: initial;
  opacity: 1;
}
`

export const Layout = styled.section`
  min-height: calc(100vh - 8.8rem - 6.8rem - 5.5rem);
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};

  ${props =>
    props.fromLeft &&
    css`
      opacity: 0;
      animation: 0.5s ${fromLeft} forwards;
    `}

  ${props =>
    props.fromTop &&
    css`
      opacity: 0;
      animation: 0.5s ${fromTop} forwards;
    `}

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
      min-height: ${({ minHeight }) => minHeight || 'initial'};
      height: ${({ height }) => height};
    `}

    &.CardFeatured {
    @media (max-width: 50em) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }

    @media (max-width: 31.25em) {
      grid-template-columns: 1fr;
      grid-template-rows: 250px min-content;
    }
  }

  &.AboutWrapper {
    width: 50%;
    padding: 2.5rem 4rem;
    margin-top: 2.5rem;

    &:nth-child(2n + 1) {
      background: ${props => props.theme.colors.secondary};
    }

    @media (max-width: 31.5em) {
      width: 90%;
    }
  }
`
