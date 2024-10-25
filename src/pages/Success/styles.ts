import { styled } from 'styled-components';
import { Wrapper } from '../../styles/global';
import { typography } from '../../styles/typography';

export const Container = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > h2 {
    ${typography.fonts.titleL}
    color: ${props => props.theme.colors['yellow-dark']};
  }

  > p {
    ${typography.fonts.textL}
    color: ${props => props.theme.colors['base-subtitle']};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 6.375rem;
`;

export const ItemsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(45deg, #dbac2c, #8047f8);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    ${typography.fonts.textM}
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;

export const Image = styled.img`
  width: 30.75rem;
`;
