import styled from 'styled-components';
import { Wrapper } from '../../../styles/global';
import { typography } from '../../../styles/typography';

export const Container = styled(Wrapper)``;

export const CoffeeListContainer = styled.div`
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  ${typography.fonts.titleL}
  margin-bottom: 3.375rem;
`;
