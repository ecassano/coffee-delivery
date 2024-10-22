import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import { Container, ItemsContainer, Image, Item, TextContainer, Background } from "./styles";

import img from "../../assets/intro-coffee.svg";

const Intro = () => {
  return (
    <Background>
      <Container>
        <div>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </TextContainer>
          <ItemsContainer>
            <Item variant="yellowDark">
              <span><ShoppingCart size={22} weight="fill" /></span>
              <p>Compra simples e segura</p>
            </Item>
            <Item variant="gray">
              <span><Package size={22} weight="fill" /></span>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item variant="yellow">
              <span><Timer size={22} weight="fill" /></span>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item variant="purple">
              <span><Coffee size={22} weight="fill" /></span>
              <p>O café chega fresquinho até você</p>
            </Item>
          </ItemsContainer>
        </div>
        <div>
          <Image src={img} alt="Imagem ilustrativa de um copo de café" />
        </div>
      </Container>
    </Background>
  )
}

export default Intro