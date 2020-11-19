import styled from 'styled-components'

export const Text = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.1rem;
  border-radius: 2px;
  padding: 0 2rem;
  font-size: 3rem;
  font-weight: 700;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.fontOnPrimary};
`
