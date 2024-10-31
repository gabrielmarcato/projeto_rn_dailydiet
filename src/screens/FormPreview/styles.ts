import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

type Props = {
    typeColor: string
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({ theme, typeColor }) => typeColor === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
    flex: 1;
    width: 100%;
    border-radius: 20px 20px 0 0;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 24px;
`

export const Form = styled.View`
    flex: 1;
    flex-direction: column;
    margin-top: 30px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-bottom: 5px;
`

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-bottom: 20px;
`

export const Label = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-bottom: 5px;
`

export const Flag = styled.View`
    max-width: 40%;
    height: 34px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const FlagText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const FlagStatus = styled.View<Props>`
    height: 8px;
    width: 8px;
    border-radius: 8px;
    margin-right: 10px;
    background-color: ${({ theme, typeColor }) => typeColor === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const ButtonContent = styled.View`
    flex-direction: column;
    align-content: flex-end;
`