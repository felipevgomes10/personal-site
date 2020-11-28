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
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ radius }) => radius};
  margin: ${({ margin }) => margin};
  overflow: ${({ overflowHidden }) => overflowHidden && 'hidden'};
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: 0.3s;

  ${props =>
    props.show &&
    css`
      opacity: 1;
    `}

  ${props =>
    props.logged &&
    css`
      border-radius: 50%;
      border: 3px solid ${props => props.theme.colors.confirmation};
    `}
`
