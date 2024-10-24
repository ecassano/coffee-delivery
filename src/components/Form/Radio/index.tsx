import { InputHTMLAttributes } from "react";
import { RadioContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Radio = ({ id, children }: Props) => {
  return (
    <RadioContainer>
      <input type="radio" name="payment-options" id={id} />
      <label htmlFor={id}>{children}</label>
    </RadioContainer>
  )
}

export default Radio