import styled, { createGlobalStyle } from 'styled-components';
import { typography } from './typography';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        ${typography.fonts.textM}
    }

    button{
        border: none;
        cursor: pointer;
    }
`;

export const Wrapper = styled.div`
  max-width: 1160px;
  padding: 32px 0.5rem;
  margin: 0 auto;
`;
