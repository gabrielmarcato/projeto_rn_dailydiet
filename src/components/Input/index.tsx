import { useState } from "react"
import { TextInputProps } from "react-native"
import { InputContainer, InputLabel, InputText } from "./styles"

type Props = TextInputProps & {
    label: string
}

export function Input({label, ...rest}: Props) {
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