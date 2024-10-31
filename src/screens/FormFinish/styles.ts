import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

type Props = {
    typeColor: string
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 24px;
`

export const Content = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`

export const Title = styled.Text<Props>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    color: ${({ theme, typeColor }) => typeColor === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    text-align: center;
    margin-bottom: 10px;
`

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
`

export const ImageBox = styled.Image`
    height: 288px;
    width: 224px;
    margin-bottom: 40px;
`