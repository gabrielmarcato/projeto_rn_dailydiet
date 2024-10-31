import { useState } from "react"
import { MaskedTextInputProps } from "react-native-mask-text";
import { InputContainer, InputLabel, InputText } from "./styles"

type Props = MaskedTextInputProps & {
    label: string
}

export function InputMask({label, ...rest}: Props) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <InputContainer>
            <InputLabel>{label}</InputLabel>
            <InputText 
                focused={isFocused}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />
        </InputContainer>
    )
}