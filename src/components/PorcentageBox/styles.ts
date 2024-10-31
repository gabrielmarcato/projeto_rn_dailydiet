import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { ArrowUpRight } from 'lucide-react-native'

type Props = {
    type: string
}

export const Container = styled(TouchableOpacity)<Props>`
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    width: 100%;
    height: 102px;
    max-height: 102px;
    border-radius: 8px;
    padding: 20px 16px 20px 16px;
    margin-bottom: 30px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
`

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    text-align: center;
`

export const IconOpen = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    right: 8px;
    top: 8px;
`