import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Item } from "../Home/Intro/styles"
import { Container, ItemInfoContainer, ItemsContainer, Image, TitleContainer } from "./styles"
import img from "../../assets/success-illustration.svg";
import { InfoContainer } from "../Cart/styles";

const Success = () => {
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
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <p>Jacarepaguá - Rio de Janeiro, RJ</p>
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
              <p><strong>Cartão de Crédito</strong></p>
            </ItemInfoContainer>
          </Item>
        </ItemsContainer>
        <Image src={img} />
      </InfoContainer>
    </Container>
  )
}

export default Success