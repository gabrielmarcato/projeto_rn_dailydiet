import { useTheme } from "styled-components/native"
import { Container, TextTitle, IconBack, IconContainer } from "./styles"

type Props = {
    colorIcon?: 'PRIMARY' | 'SECONDARY' | 'DEFAULT'
    title?: string
    onBack: () => void
}

export function Header({colorIcon = "DEFAULT", title = "", onBack}: Props) {
    const { COLORS } = useTheme()
    return (
        <Container>
            <TextTitle>{title}</TextTitle>
            {colorIcon === "DEFAULT" && (
                <IconContainer onPress={onBack}>
                    <IconBack color={COLORS.GRAY_600} />
                </IconContainer>
            )}
            {colorIcon === "PRIMARY" && (
                <IconContainer onPress={onBack}>
                    <IconBack color={COLORS.GREEN_DARK} />
                </IconContainer>
            )}
            {colorIcon === "SECONDARY" && (
                <IconContainer onPress={onBack}>
                    <IconBack color={COLORS.RED_DARK} />
                </IconContainer>
            )}
        </Container>
    )
}