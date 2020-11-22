import styled from 'styled-components'

export const TagItem = styled.span`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.fontOnPrimary};
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  border-radius: 15px;
`
