import styled from 'styled-components';
import { Wrapper } from '../../styles/global';
import { typography } from '../../styles/typography';

export const Container = styled(Wrapper).attrs({ as: 'header' })`
  display: flex;
  justify-content: space-between;

  img {
    width: 5.25rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background: ${props => props.theme.colors['purple-light']};
    padding: 0.625rem 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme.colors['purple-dark']};

    p {
      ${typography.fonts.textS}
    }
  }

  a {
    background: ${props => props.theme.colors['yellow-light']};
    color: ${props => props.theme.colors['yellow-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    line-height: 0;
    position: relative;

    > span {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);

      width: 1.25rem;
      height: 1.25rem;
      border-radius: 0.625rem;
      background: ${props => props.theme.colors['yellow-dark']};
      ${typography.fonts.textS}
      font-size: 0.75rem;
      font-weight: bold;
      color: ${props => props.theme.colors.white};
    }
  }
`;
