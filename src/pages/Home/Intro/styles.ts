import styled from 'styled-components';
import { Wrapper } from '../../../styles/global';
import { typography } from '../../../styles/typography';
import bg from '../../../assets/background.png';

const BADGE_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const;

interface ItemProps {
  variant: keyof typeof BADGE_COLORS;
}

export const Background = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;

export const Container = styled(Wrapper)`
  display: flex;
  gap: 3.5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 29.75rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4.125rem;

  h1 {
    ${typography.fonts.titleXL};
    color: ${props => props.theme.colors['base-title']};
  }

  p {
    ${typography.fonts.textL};
    color: ${props => props.theme.colors['base-subtitle']};
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme.colors.background};

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${props => props.theme.colors[BADGE_COLORS[props.variant]]};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  p {
    ${typography.fonts.textM}
    color: ${props => props.theme.colors['base-text']};
  }
`;
