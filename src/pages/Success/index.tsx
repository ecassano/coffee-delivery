import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Item } from "../Home/Intro/styles"
import { Container, ItemInfoContainer, ItemsContainer, Image, TitleContainer } from "./styles"
import img from "../../assets/success-illustration.svg";
import { InfoContainer } from "../Cart/styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

const Success = () => {
  const { orders } = useContext(CartContext);

  const lastOrder = orders[orders.length - 1];

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  return (
    <Container>
      <TitleContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>
      <InfoContainer>
        <ItemsContainer>
          <Item variant="purple">
            <span><MapPin size={16} weight="fill" /></span>
            <div>
              <p>Entrega em {lastOrder.street}, {lastOrder.number}</p>
              <p>{lastOrder.neighborhood} - {lastOrder.city}, {lastOrder.state}</p>
            </div>
          </Item>
          <Item variant="yellow">
            <span><Timer size={16} weight="fill" /></span>
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </Item>
          <Item variant="yellowDark">
            <span><CurrencyDollar size={16} weight="fill" /></span>
            <ItemInfoContainer>
              <p>Pagamento na entrega</p>
              <p><strong>{paymentMethod[lastOrder.paymentMethod]}</strong></p>
            </ItemInfoContainer>
          </Item>
        </ItemsContainer>
        <Image src={img} />
      </InfoContainer>
    </Container>
  )
}

export default Success