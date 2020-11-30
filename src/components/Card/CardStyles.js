import styled, { css, keyframes } from 'styled-components'

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const detailsAnim = keyframes`
from {
  transform: translateX(-5px);
}
to {
  transform: initial;
}
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  min-height: 203px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  padding: ${({ padding }) => padding || '2.5rem'};
  overflow: ${({ overflow }) => overflow};
  margin: 2.5rem;
  transition: 0.3s;

  &:hover {
    border: 1px solid ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }

  &&& a {
    ${flex}
    align-self: flex-end;
    border-radius: 2px;
    height: 4.3rem;
    width: 12.5rem;
    font-size: 1.7rem;
    margin-top: 1.7rem;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.fontOnPrimary};
    padding: 0;
    transition: 0.1s;
    cursor: pointer;

    & svg {
      margin-left: 5px;
      fill: currentColor;

      & > * {
        fill: currentColor;
        stroke-width: 1.7px;
      }
    }

    &:hover {
      box-shadow: 0 0 0 2px ${props => props.theme.colors.primaryLight},
        0 0 0 3px ${props => props.theme.colors.primary};
    }
  }

  &:hover a {
    animation: 0.3s ${detailsAnim} forwards;
    animation-timing-function: ease-in;
  }
`

export const CardTitle = styled.h3`
  ${flex};
  font-size: 2rem;
  margin-bottom: 1.7rem;
  align-self: center;

  &::before {
    content: '';
    display: inline-block;
    width: 1.8rem;
    height: 1.5rem;
    margin-right: 8px;
    border-radius: 2px;
    background: ${props => props.theme.colors.primary};
  }
`

export const CardText = styled.div`
  max-width: 59rem;
  min-height: 80px;

  &::before,
  &::after {
    content: '';
    display: block;
  }

  &::before {
    width: 40px;
    height: 2px;
    border-radius: 10px;
    margin: 0 auto;
    background: ${props => props.theme.colors.font};
    margin-top: -8px;
  }

  &::after {
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.secondary};
  }

  & p {
    padding: 2.5rem;
  }
`
