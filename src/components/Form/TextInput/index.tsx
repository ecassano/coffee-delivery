import { FocusEvent, forwardRef, InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";
import { ErrorMessage, InputContainer } from "./styles";

export type SizeType = "default" | "full-width" | "min-width";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  sizetype?: SizeType;
  optional?: boolean;
  error?: FieldError;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ optional = false, error, sizetype, id, onBlur, onFocus, ...rest }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const [isActive, setIsActive] = useState(false);

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsActive(!!e.target.value); // Verifica se o input tem valor ao perder o foco
      if (onBlur) onBlur(e); // Chama o onBlur do react-hook-form, se fornecido
    };

    return (
      <>
        <InputContainer
          isActive={isActive}
          sizetype={sizetype}
        >
          <input
            type="text"
            id={inputId}
            ref={ref}
            onBlur={handleBlur}
            {...rest}
          />
          {optional && <label htmlFor={inputId}>Opcional</label>}
        </InputContainer>
        {error?.message ? (
          <ErrorMessage role="alert">{error.message}</ErrorMessage>
        ) : null}
      </>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
