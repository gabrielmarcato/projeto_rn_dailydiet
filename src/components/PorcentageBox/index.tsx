import { TouchableOpacityProps } from "react-native"
import { Container, Title, Description, IconOpen } from "./styles"

type Props = TouchableOpacityProps & {
    porcentage: string
}

export function PorcentageBox({ porcentage, ...rest }: Props) {
    const verifyValue = Number(porcentage) > 50 ? 'PRIMARY' : 'SECONDAY'
    return (
        <Container type={verifyValue} {...rest}>
            <Title>{porcentage ?? "0"}%</Title>
            <Description>das refeições dentro da dieta</Description>
            <IconOpen type={verifyValue}/>
        </Container>
    )
}