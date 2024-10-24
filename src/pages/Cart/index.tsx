import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import Radio from "../../components/Form/Radio"
import TextInput from "../../components/Form/TextInput"
import { AddressForm, Container, FormsContainer, Forms, InfoContainer, InputsContainer, PaymentForm, RadiosContainer, Title, OrderContainer } from "./styles"

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
      </OrderContainer>
    </Container >
  )
}

export default Cart