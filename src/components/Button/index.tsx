import { TouchableOpacityProps } from "react-native"
import { Container, TextButton } from "./styles"

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <TextButton>{title}</TextButton>
        </Container>
    )
}