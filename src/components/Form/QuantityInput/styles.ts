import styled from 'styled-components';
import { typography } from '../../../styles/typography';

export const QuantityInputContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  flex-grow: 1;

  background: ${props => props.theme.colors['base-button']};

  span {
    ${typography.fonts.textM}
    color: ${props => props.theme.colors['base-title']};
    width: 1.25rem;
    text-align: center;
  }

  button {
    background: transparent;
    color: ${props => props.theme.colors.purple};
    line-height: 0;

    &:hover {
      color: ${props => props.theme.colors['purple-dark']};
    }
  }
`;
