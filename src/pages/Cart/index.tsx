import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react"
import QuantityInput from "../../components/Form/QuantityInput"
import Radio from "../../components/Form/Radio"
import TextInput from "../../components/Form/TextInput"
import { AddressForm, Container, FormsContainer, Forms, InfoContainer, InputsContainer, PaymentForm, RadiosContainer, Title, OrderContainer, Order, CoffeeCard, CoffeeInfoContainer, Info, Image, RemoveButton, Divider, TotalInfoContainer, Subtotal, Total } from "./styles"
import { Fragment } from "react/jsx-runtime"
import { Coffee } from "../Home/CoffeeList"

interface CoffeeOrder extends Coffee {
  qtd: number;
}
interface Props {
  items: CoffeeOrder[];
}

const items = [
  {
    id: "0",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: [
      "tradicional"
    ],
    price: 9.90,
    image: "/images/coffees/expresso.png"
  },
  {
    id: "2",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: [
      "tradicional"
    ],
    price: 9.90,
    image: "/images/coffees/expresso-cremoso.png"
  },
]

const Cart = () => {
  return (
    <Container>
      <FormsContainer>
        <Title>Complete seu pedido</Title>
        <Forms>
          <AddressForm>
            <InfoContainer>
              <MapPinLine size={22} />
              <span>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </span>
            </InfoContainer>
            <InputsContainer>
              <div>
                <TextInput placeholder="CEP" sizeType="default" />
              </div>
              <div>
                <TextInput placeholder="Rua" sizeType="full-width" />
              </div>
              <div>
                <TextInput placeholder="Número" sizeType="default" />
                <TextInput placeholder="Complemento" optional />
              </div>
              <div>
                <TextInput placeholder="Bairro" sizeType="default" />
                <TextInput placeholder="Cidade" />
                <TextInput placeholder="UF" sizeType="min-width" />
              </div>
            </InputsContainer>
          </AddressForm>
          <PaymentForm>
            <InfoContainer>
              <CurrencyDollar size={22} />
              <span>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </span>
            </InfoContainer>
            <RadiosContainer>
              <Radio id="cartao-credito">
                <CreditCard size={16} />
                <p>cartão de crédito</p>
              </Radio>
              <Radio id="cartao-debito">
                <Bank size={16} />
                <p>cartão de débito</p>
              </Radio>
              <Radio id="dinheiro">
                <Money size={16} />
                <p>dinheiro</p>
              </Radio>
            </RadiosContainer>
          </PaymentForm>
        </Forms>
      </FormsContainer>
      <OrderContainer>
        <Title>Cafés selecionados</Title>
        <Order>
          {items.map(item => (
            <Fragment key={item.id}>
              <CoffeeCard>
                <CoffeeInfoContainer>
                  <Image src={`../../../public${item.image}`} alt="" />
                  <Info>
                    <h4>{item.title}</h4>
                    <div>
                      <QuantityInput />
                      <RemoveButton><Trash size={16} /><p>Remover</p></RemoveButton>
                    </div>
                  </Info>
                </CoffeeInfoContainer>
                <aside>R$ {item.price.toFixed(2)}</aside>
              </CoffeeCard>
              <Divider />
            </Fragment>
          ))}
          <TotalInfoContainer>
            <Subtotal>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </Subtotal>
            <Subtotal>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </Subtotal>
            <Total>
              <span>Total</span>
              <span>R$ 33,20</span>
            </Total>
          </TotalInfoContainer>
        </Order>
      </OrderContainer>
    </Container >
  )
}

export default Cart