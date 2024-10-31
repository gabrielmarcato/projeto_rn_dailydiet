import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Content = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 24px;
`

export const ContentInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
`