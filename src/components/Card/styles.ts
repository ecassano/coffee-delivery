import styled from 'styled-components';
import { typography } from '../../styles/typography';

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${props => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin: -1.25rem auto 0.75rem auto;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    ${typography.fonts.tag}
    background: ${props => props.theme.colors['yellow-light']};
    color: ${props => props.theme.colors['yellow-dark']};

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
  }
`;

export const Title = styled.h3`
  ${typography.fonts.titleS}
  margin: 1rem auto 0.5rem auto;
`;

export const Description = styled.p`
  ${typography.fonts.textS}
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors['base-label']};
`;

export const Controls = styled.div`
  width: 100%;
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Order = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;

  > button {
    background: ${props => props.theme.colors['purple-dark']};
    color: ${props => props.theme.colors['base-card']};

    padding: 0.5rem;
    border-radius: 6px;
    line-height: 0;

    &:hover {
      background: ${props => props.theme.colors.purple};
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;

  ${typography.fonts.textS}
  color: ${props => props.theme.colors['base-text']};

  strong {
    ${typography.fonts.titleM}
  }
`;
