import styled, { css } from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 23px;
`

export const TitleText = styled.Text`
    width: 100%;
    margin-bottom: 15px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const HeaderSection = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};
    `}
    margin-bottom: 15px;
    margin-top: 10px;
`