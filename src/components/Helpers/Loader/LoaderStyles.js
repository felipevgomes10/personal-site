import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
to {
    transform: rotate(360deg);
  }
`

export const LoaderWrapper = styled.div`
  height: 8rem;
  width: 8rem;
  border: 0.8rem solid #eee;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
`
export const LoaderBall = styled.span`
  display: block;
  width: 1.7rem;
  height: 1.7rem;
  background: #eee;
  border-radius: 50%;
  margin: 1.1rem;
`
