import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { Coffee } from "../../pages/Home/CoffeeList";
import QuantityInput from "../Form/QuantityInput";
import { CardContainer, Controls, Description, Image, Order, Price, Tags, Title } from "./styles";

const Card = (data: Coffee) => {
  const { id, image, tags, title, description, price } = data;
  const [qtd, setQtd] = useState(1);
  const { addItem } = useContext(CartContext);

  const handleAddItem = () => {
    addItem({ id, qtd });
  }

  const handleIncrement = () => {
    setQtd(prevQtd => prevQtd + 1);
  }

  const handleDecrement = () => {
    setQtd(prevQtd => prevQtd > 1 ? prevQtd - 1 : 1);
  }

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
          <QuantityInput
            qtd={qtd}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
          <button onClick={handleAddItem}><ShoppingCart weight="fill" size={22} /></button>
        </Order>
      </Controls>
    </CardContainer>
  )
}

export default Card