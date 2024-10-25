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

export const OrderContainer = styled.div`
  flex: 2;
`;

export const Order = styled.div`
  background: ${props => props.theme.colors['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  > span {
  }
`;

export const CoffeeCard = styled.div`
  display: flex;
  justify-content: space-between;

  > aside {
    ${typography.fonts.textM}
    font-weight: bold;
    color: ${props => props.theme.colors['base-text']};
  }
`;

export const Image = styled.img`
  width: 4rem;
`;

export const CoffeeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h4 {
    ${typography.fonts.textM}
    color: ${props => props.theme.colors['base-subtitle']};
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme.colors.purple};

  background: ${props => props.theme.colors['base-button']};

  &:hover {
    background: ${props => props.theme.colors['base-hover']};
  }

  > p {
    text-transform: uppercase;
    ${typography.fonts.buttonM}
    color: ${props => props.theme.colors['base-text']};
  }
`;

export const Divider = styled.span`
  height: 1px;
  background: ${props => props.theme.colors['base-button']};
  margin: 1.5rem 0;
`;

export const TotalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BaseTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Subtotal = styled(BaseTotal)`
  color: ${props => props.theme.colors['base-text']};

  > span:first-child {
    ${typography.fonts.textS}
  }

  > span:last-child {
    ${typography.fonts.textM}
  }
`;

export const Total = styled(BaseTotal)`
  color: ${props => props.theme.colors['base-subtitle']};
  ${typography.fonts.textL}
  font-weight: bold;
`;

export const ConfirmButton = styled.button`
  background: ${props => props.theme.colors.yellow};
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  ${typography.fonts.buttonG}

  &:hover {
    background: ${props => props.theme.colors['yellow-dark']};
  }
`;
