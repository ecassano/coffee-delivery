import styled from 'styled-components';
import { typography } from '../../../styles/typography';

export const RadioContainer = styled.div`
  flex: 1;
  background: ${props => props.theme.colors['base-button']};
  border-radius: 6px;

  &:hover {
    background: ${props => props.theme.colors['base-hover']};
  }

  > input {
    display: none;
  }

  > input:checked + label {
    background: ${props => props.theme.colors['purple-light']};
    border-color: ${props => props.theme.colors.purple};
  }

  > label {
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;

    > p {
      ${typography.fonts.buttonM};
      text-transform: uppercase;
      color: ${props => props.theme.colors['base-text']};
    }
  }
`;
