import { forwardRef, InputHTMLAttributes, useState, ChangeEvent } from "react";
import { InputContainer } from "./styles";

export type SizeType = "default" | "full-width" | "min-width";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  sizeType?: SizeType;
  optional?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ optional = false, sizeType, id, ...rest }, ref) => {
    const [inputValue, setInputValue] = useState("");

    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    return (
      <InputContainer
        isActive={inputValue.length > 0}
        sizeType={sizeType}
      >
        <input
          type="text"
          id={inputId}
          ref={ref}
          value={inputValue}
          onChange={handleChange}
          {...rest}
        />
        {optional && <label htmlFor={inputId}>Opcional</label>}
      </InputContainer>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
