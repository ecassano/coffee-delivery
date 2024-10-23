import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { QuantityInputContainer } from "./styles"

const QuantityInput = () => {
  const [qtd, setQtd] = useState(1);
  return (
    <QuantityInputContainer>
      <button onClick={() => setQtd(prevQtd => prevQtd > 1 ? prevQtd - 1 : 1)}><Minus weight="bold" size={14} /></button>
      <span>{qtd}</span>
      <button onClick={() => setQtd(prevQtd => prevQtd + 1)}><Plus weight="bold" size={14} /></button>
    </QuantityInputContainer>
  )
}

export default QuantityInput