import { useState } from "react"
import {
    Container,
    Label,
    ContentButton,
    ButtonIn,
    ButtonOut,
    ButtonText,
    IconStatus
} from "./styles"

type Props = {
    OnSelected: (select: string) => void
    OnSelect?: string
}

export function ButtonSelect({ OnSelected, OnSelect = "" }: Props) {

    const [ btnSelect, SetBtnSelect ] = useState(OnSelect ?? "")

    function handleSelected(value: string) {
        SetBtnSelect(value)
        OnSelected(value)
    }
    
    return (
        <Container>
            <Label>Está dentro da dieta?</Label>
            <ContentButton>
                <ButtonIn onPress={() => handleSelected("in")} btnSelect={btnSelect}>
                    <IconStatus statusColor="PRIMARY"/>
                    <ButtonText>Sim</ButtonText>
                </ButtonIn>
                <ButtonOut onPress={() => handleSelected("out")} btnSelect={btnSelect}>
                    <IconStatus />
                    <ButtonText>Não</ButtonText>
                </ButtonOut>
            </ContentButton>
        </Container>
    )
}