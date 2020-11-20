import styled, { css } from 'styled-components'
import { Btn } from '../Helpers/Button/ButtonStyles'

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 2.5rem;
  margin: 2.5rem;
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
    height: 4px;
    border-radius: 2px;
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

export const CardButton = styled(Btn)`
  ${flex}
  align-self: flex-end;
  border-radius: 2px;
  height: 3.3rem;
  width: 11.2rem;
  font-size: 1.7rem;
  margin-top: 1.7rem;

  & svg {
    margin-left: 5px;
  }
`
