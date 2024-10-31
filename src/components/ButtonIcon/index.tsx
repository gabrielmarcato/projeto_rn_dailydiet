import { TouchableOpacityProps } from "react-native"
import { useTheme } from "styled-components/native"
import { Container, TextButton, ButtonTypeStyleProps } from "./styles"
import { Plus, PencilLine, Trash2 } from "lucide-react-native"

type Props = TouchableOpacityProps & {
    type: ButtonTypeStyleProps
    title: string
}

export function ButtonIcon({ type, title, ...rest }: Props) {
    const { COLORS } = useTheme()
    return (
        <Container type={type} {...rest}>

            {type === "new" && (
                <Plus color={COLORS.WHITE} size={18}/>
            )}

            {type === "edit" && (
                <PencilLine color={COLORS.WHITE} size={18}/>
            )}

            {type === "remove" && (
                <Trash2 color={COLORS.GRAY_700} size={18}/>
            )}

            <TextButton type={type}>{title}</TextButton>
        </Container>
    )
}