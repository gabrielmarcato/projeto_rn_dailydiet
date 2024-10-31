import { useCallback, useState } from "react"

import { useFocusEffect, useNavigation } from "@react-navigation/native"

import { 
    Container, 
    PorcentageBox,
    PorcentageBoxTitle,
    PorcentageBoxDescription,
    Content,
    Title,
    BoxCard,
    BoxCardTitle,
    BoxCardDescription,
    BoxCardContent,
    BoxCardPrimary,
    BoxCardSecondary
} from "./styles"

import { Header } from "@components/Header"
import { mealsGetStats } from "@storage/meals/mealsGetStats"

export function Statistics() {
    const navigation = useNavigation()
    const [total, setTotal] = useState("0");
    const [within, setWhitin] = useState("0");
    const [without, setWhitout] = useState("0");
    const [porcentage, setPorcentage] = useState("0");
    const [seq, setSeq] = useState("0");
    

    function handleGoBack() {   
        navigation.goBack()
    }

    async function fetchGetStats() {
        try {
            const response = await mealsGetStats()
            setTotal(String(response.total))
            setWhitin(String(response.in))
            setWhitout(String(response.out))
            setPorcentage(String(response.perc))
            setSeq(String(response.seq))
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchGetStats()
    }, []))

    return (
        <Container>
            <Header colorIcon="PRIMARY" onBack={handleGoBack}/>
            <PorcentageBox>
                <PorcentageBoxTitle>{porcentage ?? "0"}%</PorcentageBoxTitle>
                <PorcentageBoxDescription>das refeições dentro da dieta</PorcentageBoxDescription>
            </PorcentageBox>
            <Content>
                <Title>Estatísticas gerais</Title>
                <BoxCard>
                    <BoxCardTitle>{seq}</BoxCardTitle>
                    <BoxCardDescription>melhor sequência de pratos dentro da dieta</BoxCardDescription>
                </BoxCard>
                <BoxCard>
                    <BoxCardTitle>{total}</BoxCardTitle>
                    <BoxCardDescription>refeições registradas</BoxCardDescription>
                </BoxCard>
                <BoxCardContent>
                    <BoxCardPrimary>
                        <BoxCardTitle>{within}</BoxCardTitle>
                        <BoxCardDescription>refeições dentro da dieta</BoxCardDescription>
                    </BoxCardPrimary>
                    <BoxCardSecondary>
                        <BoxCardTitle>{without}</BoxCardTitle>
                        <BoxCardDescription>refeições fora da dieta</BoxCardDescription>
                    </BoxCardSecondary>
                </BoxCardContent>
            </Content>
        </Container>
    )
}