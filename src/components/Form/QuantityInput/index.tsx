import { Minus, Plus } from "phosphor-react"
import { QuantityInputContainer } from "./styles"

interface Props {
  qtd: number;
  increment: () => void;
  decrement: () => void;
}

const QuantityInput = ({ qtd, increment, decrement }: Props) => {
  return (
    <QuantityInputContainer>
      <button onClick={decrement}><Minus weight="bold" size={14} /></button>
      <span>{qtd}</span>
      <button onClick={increment}><Plus weight="bold" size={14} /></button>
    </QuantityInputContainer>
  )
}

export default QuantityInput