import { ShoppingCart } from "phosphor-react";
import { Coffee } from "../../pages/Home/CoffeeList";
import QuantityInput from "../Form/QuantityInput";
import { CardContainer, Controls, Description, Image, Order, Price, Tags, Title } from "./styles";

const Card = (data: Coffee) => {
  const { image, tags, title, description, price } = data;

  return (
    <CardContainer>
      <Image src={`../../../public${image}`} alt="" />
      <Tags>
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Controls>
        <Price>R$ <strong>{price.toFixed(2)}</strong></Price>
        <Order>
          <QuantityInput />
          <button><ShoppingCart weight="fill" size={22} /></button>
        </Order>
      </Controls>
    </CardContainer>
  )
}

export default Card