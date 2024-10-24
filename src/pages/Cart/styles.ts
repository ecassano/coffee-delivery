import styled from 'styled-components';
import { Wrapper } from '../../styles/global';
import { typography } from '../../styles/typography';

const BaseForm = styled.div`
  background: ${props => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  width: 100%;
`;

export const Container = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const FormsContainer = styled.div`
  flex: 3;
`;

export const OrderContainer = styled.div`
  flex: 2;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const AddressForm = styled(BaseForm)`
  color: ${props => props.theme.colors.yellow};
`;

export const PaymentForm = styled(BaseForm)`
  color: ${props => props.theme.colors.purple};
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.75rem;

  span {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  h3 {
    ${typography.fonts.textM}
    color: ${props => props.theme.colors['base-subtitle']};
  }

  p {
    ${typography.fonts.textS}
    color: ${props => props.theme.colors['base-text']};
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const RadiosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;
