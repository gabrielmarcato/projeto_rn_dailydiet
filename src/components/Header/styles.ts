import styled, { css } from "styled-components/native"
import { ArrowLeft } from "lucide-react-native"
import { TouchableOpacity } from "react-native"

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
`

export const TextTitle = styled.Text`
    flex: 1;
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const IconContainer = styled(TouchableOpacity)`
    position: absolute;
    left: 24px;
    top: 24px;
`

export const IconBack = styled(ArrowLeft).attrs(() => ({
    size: 24,
}))``