import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react"
import QuantityInput from "../../components/Form/QuantityInput"
import Radio from "../../components/Form/Radio"
import TextInput from "../../components/Form/TextInput"
import {
  AddressForm,
  Container,
  FormsContainer,
  // Forms,
  InfoContainer,
  InputsContainer,
  PaymentForm,
  RadiosContainer,
  Title,
  OrderContainer,
  Order,
  CoffeeCard,
  CoffeeInfoContainer,
  Info,
  Image,
  RemoveButton,
  Divider,
  TotalInfoContainer,
  Subtotal,
  Total,
  ConfirmButton
} from "./styles"
import { Fragment } from "react/jsx-runtime"
import { FormEvent, useContext } from "react"
import { CartContext } from "../../contexts/CartProvider"
import { coffees } from "../../../data.json";
import { CoffeeInCart } from "../../@types/types"
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

interface FormInputs {
  cep: string;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash"
}

const OrderSchema = z.object({
  cep: z.string().min(1, "Informe um CEP válido"),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof OrderSchema>

const deliveryPrice = 3.5;

const Cart = () => {
  const { cart, removeItem, incrementItemQtd, decrementItemQtd, checkout } = useContext(CartContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>({
    resolver: zodResolver(OrderSchema)
  });

  const selectedPaymentMethod = watch('paymentMethod');

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

  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form enviado!");
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
    checkout(data)
  }

  return (
    <Container>
      <FormsContainer>
        <Title>Complete seu pedido</Title>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '0.75rem'
          }}
          id="order"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
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
                <TextInput placeholder="CEP" sizetype="default" {...register('cep')} />
              </div>
              <div>
                <TextInput placeholder="Rua" sizetype="full-width" {...register('street')} />
              </div>
              <div>
                <TextInput placeholder="Número" sizetype="default" {...register('number')} />
                <TextInput placeholder="Complemento" optional {...register('fullAddress')} />
              </div>
              <div>
                <TextInput placeholder="Bairro" sizetype="default" {...register('neighborhood')} />
                <TextInput placeholder="Cidade" {...register('city')} />
                <TextInput placeholder="UF" sizetype="min-width" {...register('state')} />
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
              <Radio
                id="cartao-credito"
                isSelected={selectedPaymentMethod === "credit"}
                {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard size={16} />
                <p>cartão de crédito</p>
              </Radio>
              <Radio
                id="cartao-debito"
                isSelected={selectedPaymentMethod === "debit"}
                {...register('paymentMethod')}
                value="debit"
              >
                <Bank size={16} />
                <p>cartão de débito</p>
              </Radio>
              <Radio
                id="dinheiro"
                {...register('paymentMethod')}
                isSelected={selectedPaymentMethod === "cash"}
                value="cash"
              >
                <Money size={16} />
                <p>dinheiro</p>
              </Radio>
            </RadiosContainer>
          </PaymentForm>
        </form>
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
          <ConfirmButton type="submit" form="order">confirmar pedido</ConfirmButton>
        </Order>
      </OrderContainer>
    </Container >
  )
}

export default Cart