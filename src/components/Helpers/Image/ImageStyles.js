import styled, { css, keyframes } from 'styled-components'

const animate = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`
export const SkeletonWrapper = styled.div`
  display: grid;
`

export const Skeleton = styled.div`
  max-width: 100%;
  grid-area: 1 / 1;
  background-image: linear-gradient(
    90deg,
    #eeeeee 0px,
    #fbfbf8 50%,
    #eeeeee 100%
  );
  background-color: ${props => props.theme.colors.secondary};
  background-size: 200%;
  animation: ${animate} 0.5s infinite linear;
`

export const Img = styled.img`
  grid-area: 1 / 1;
  opacity: 0;
  transition: 0.3s;

  ${props =>
    props.show &&
    css`
      opacity: 1;
    `}
`
