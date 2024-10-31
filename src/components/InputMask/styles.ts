import styled from "styled-components/native"
import { MaskedTextInput } from "react-native-mask-text"

type Props = {
    focused?: boolean
}

export const InputContainer = styled.View<Props>`
    width: 100%;
    margin-bottom: 20px;
`;

export const InputLabel = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-bottom: 5px;
`;

export const InputText = styled(MaskedTextInput)<Props>`
    height: 48px;
    border-width: 1px;
    border-color: ${({ theme, focused }) => focused ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_300};
    padding: 14px;
    border-radius: 6px;
`;