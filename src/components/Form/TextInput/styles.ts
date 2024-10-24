import { styled } from 'styled-components';
import { SizeType } from '.';
import { typography } from '../../../styles/typography';

export const InputContainer = styled.div<{
  isActive: boolean;
  sizeType?: SizeType;
}>`
  display: flex;
  flex: ${({ sizeType }) => !sizeType && 1};
  gap: 0 !important;
  width: ${({ sizeType }) =>
    sizeType
      ? sizeType === 'default'
        ? '12.5rem'
        : sizeType === 'full-width'
        ? '100%'
        : '3.75rem'
      : 'auto'};
  background: ${props => props.theme.colors['base-input']};
  border-radius: 4px;
  border: 1px solid transparent;
  transition: border-color 0.3s;
  border-color: ${({ theme, isActive }) =>
    isActive && theme.colors['yellow-dark']};

  &:focus-within {
    border-color: ${props => props.theme.colors['yellow-dark']};

    > label {
      display: none;
    }
  }

  > input {
    max-width: 100%;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: inherit;
    padding: 0.75rem;
    flex: 1;

    &::placeholder {
      ${typography.fonts.textS}
      color: ${props => props.theme.colors['base-label']};
    }
  }

  > label {
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    line-height: 1.3;
    color: ${props => props.theme.colors['base-label']};

    display: ${({ isActive }) => (isActive ? 'none' : 'flex')};
    align-items: center;
    cursor: text;
    padding: 0.75rem;

    &:focus {
      display: none;
    }
  }
`;
