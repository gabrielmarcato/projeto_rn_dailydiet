import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export const Container = styled(TouchableOpacity)`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 50px;
    max-height: 50px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 6px;
    padding: 5px 10px 5px 10px;
`

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
`