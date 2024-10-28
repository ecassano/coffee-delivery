import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react"
import QuantityInput from "../../components/Form/QuantityInput"
import Radio from "../../components/Form/Radio"
import TextInput from "../../components/Form/TextInput"
import { AddressForm, Container, FormsContainer, Forms, InfoContainer, InputsContainer, PaymentForm, RadiosContainer, Title, OrderContainer, Order, CoffeeCard, CoffeeInfoContainer, Info, Image, RemoveButton, Divider, TotalInfoContainer, Subtotal, Total, ConfirmButton } from "./styles"
import { Fragment } from "react/jsx-runtime"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartProvider"
import { coffees } from "../../../data.json";
import { CoffeeInCart } from "../../@types/types"

const deliveryPrice = 3.5;

const Cart = () => {
  const { cart, removeItem, incrementItemQtd, decrementItemQtd } = useContext(CartContext);

  const coffeesInCart: CoffeeInCart[] = cart.map(item => {
    const coffeeInfo = coffees.find(coffee => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Invalid coffee');
    }

    return { ...coffeeInfo, qtd: item.qtd };
  });

  const cartTotal = coffeesInCart.reduce((total, item) => {
    return total += item.qtd * item.price;
  }, 0)

  const handleIncrementItemQtd = (id: string) => {
    incrementItemQtd(id);
  }

  const handleDecrementItemQtd = (id: string) => {
    decrementItemQtd(id);
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  }

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
          {coffeesInCart.map(item => (
            <Fragment key={item.id}>
              <CoffeeCard>
                <CoffeeInfoContainer>
                  <Image src={`../../../public${item.image}`} alt="" />
                  <Info>
                    <h4>{item.title}</h4>
                    <div>
                      <QuantityInput
                        qtd={item.qtd}
                        increment={handleIncrementItemQtd.bind(this, item.id)}
                        decrement={handleDecrementItemQtd.bind(this, item.id)}
                      />
                      <RemoveButton onClick={handleRemoveItem.bind(this, item.id)}><Trash size={16} /><p>Remover</p></RemoveButton>
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
              <span>R$ {cartTotal.toFixed(2).toString()}</span>
            </Subtotal>
            <Subtotal>
              <span>Entrega</span>
              <span>R$ {cart.length > 0 ? deliveryPrice.toFixed(2) : "0.00"}</span>
            </Subtotal>
            <Total>
              <span>Total</span>
              <span>R$ {cart.length > 0 ? (cartTotal + deliveryPrice).toFixed(2).toString() : "0.00"}</span>
            </Total>
          </TotalInfoContainer>
          <ConfirmButton>confirmar pedido</ConfirmButton>
        </Order>
      </OrderContainer>
    </Container >
  )
}

export default Cart