import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

type Props = {
    type: string
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 6px;
    padding: 14px 16px 14px 12px;
    margin-bottom: 10px;
`

export const TextDate = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const Divisor = styled.View`
    width: 1px;
    height: 15px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin-left: 10px;
    margin-right: 10px;
`

export const TextDescription = styled.Text`
    flex: 1;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `}
`

export const Icon = styled.View<Props>`
    width: 14px;
    height: 14px;
    background-color: ${({ theme, type }) => type === 'in' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    border-radius: 10px;
    margin-left: 20px;
`