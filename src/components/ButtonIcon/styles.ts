import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export type ButtonTypeStyleProps = 'new' | 'edit' | 'remove'

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50px;
    max-height: 50px;
    width: 100%;
    background-color: ${({ theme, type }) => type === 'remove' ? "transparent" : theme.COLORS.GRAY_600};
    border-color: ${({ theme, type }) => type === 'remove' ? "transparent" : theme.COLORS.GRAY_600};
    border: ${({ type }) => type === 'remove' ? "1px" : "0px"};
    border-radius: 6px;
    padding: 5px 10px 5px 10px;
`

export const TextButton = styled.Text<Props>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme, type }) => type === 'remove' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
    text-align: center;
    margin-left: 10px;
`