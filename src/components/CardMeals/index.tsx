import { TouchableOpacityProps } from "react-native"
import { Container, TextDate, TextDescription, Icon, Divisor } from "./styles"

type Props = TouchableOpacityProps & {
    type: string
    hour: string
    description: string
}

export function CardMeals({type, hour, description, ...rest}: Props) {
    return (
        <Container {...rest}>
            <TextDate>{hour}</TextDate>
            <Divisor />
            <TextDescription numberOfLines={1}>{description}</TextDescription>
            <Icon type={type} />
        </Container>
    )
}