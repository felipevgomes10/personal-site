import styled from 'styled-components'

export const Video = styled.iframe`
  width: 643px;
  height: 360px;
  border: none;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 50em) {
    width: 500px;
    height: 280px;
  }

  @media (max-width: 31.25em) {
    width: 320px;
    height: 180px;
  }

  @media (max-width: 25em) {
    width: 220px;
    height: 120px;
  }
`
