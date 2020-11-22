import styled from 'styled-components'

export const LoadMoreBtn = styled.button`
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  height: 4rem;
  width: 16rem;
  border-radius: 2px;
  font-size: 1.3rem;
  font-weight: 700;
  background: ${props => props.theme.colors.secondary};
  cursor: pointer;
`
