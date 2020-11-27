import styled from 'styled-components'

export const Btn = styled.button`
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 0 2px #eeeeee;
  background: #fbfbfb;
  padding: 0.5rem 1rem;
  color: #dddddd;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (max-width: 31.25em) {
    top: initial;
    bottom: 34px;
    right: 50%;
    transform: translateX(50%);
  }
`
