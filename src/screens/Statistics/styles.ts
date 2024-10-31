import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const PorcentageBox = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const PorcentageBoxTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
`

export const PorcentageBoxDescription = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    text-align: center;
`

export const Content = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 24px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    margin-top: 30px;
`

export const Title = styled.Text`
    width: 100%;
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const BoxCard = styled.View`
    width: 100%;
    height: 89px;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-top: 20px;
    border-radius: 8px;
`

export const BoxCardTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
`

export const BoxCardDescription = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    text-align: center;
`

export const BoxCardContent = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const BoxCardPrimary = styled.View`
    width: 48%;
    height: 107px;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    margin-top: 20px;
    border-radius: 8px;
`

export const BoxCardSecondary = styled.View`
    width: 48%;
    height: 107px;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    margin-top: 20px;
    border-radius: 8px;
`