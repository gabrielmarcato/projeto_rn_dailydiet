import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native"

type PropsIcon = {
    statusColor?: string
}

type PropsBtn = {
    btnSelect?: string
}

export const Container = styled.View`
    flex-direction: column;
    margin-bottom: 20px;
`

export const Label = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-bottom: 5px;
`

export const ContentButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonIn = styled(TouchableOpacity)<PropsBtn>`
    width: 48%;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, btnSelect }) => btnSelect === "in" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_200};
    border-width: ${({ btnSelect }) => btnSelect === "in" ? 1 : 0}px;
    border-color: ${({ theme, btnSelect }) => btnSelect === "in" ? theme.COLORS.GREEN_DARK : "none"};
` 

export const ButtonOut = styled(TouchableOpacity)<PropsBtn>`
    width: 48%;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, btnSelect }) => btnSelect === "out" ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};
    border-width: ${({ btnSelect }) => btnSelect === "out" ? 1 : 0}px;
    border-color: ${({ theme, btnSelect }) => btnSelect === "out" ? theme.COLORS.RED_DARK : "none"};
` 

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const IconStatus = styled.View<PropsIcon>`
    height: 8px;
    width: 8px;
    border-radius: 10px;
    background-color: ${({ theme, statusColor }) => statusColor === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    margin-right: 10px;
`