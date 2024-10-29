import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { RadioContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  isSelected: boolean;
  children: ReactNode;
}

const Radio = forwardRef<HTMLInputElement, Props>(
  ({ id, isSelected, children, ...rest }, ref) => (
    <RadioContainer data-state={isSelected}>
      <input type="radio" id={id} ref={ref} {...rest} />
      <label htmlFor={id}>{children}</label>
    </RadioContainer>
  )
);

Radio.displayName = "Radio";

export default Radio