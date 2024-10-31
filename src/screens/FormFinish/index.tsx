import { useNavigation, useRoute } from "@react-navigation/native"

import { Container, Content, Title, Description, ImageBox } from "./styles"

import { Button } from "@components/Button"

import HappyPng from "@assets/IllustrationHappy.png"
import SadPng from "@assets/IllustrationSad.png"

type RouteParams = {
    diet: string
}

export function FormFinish() {
    const navigation = useNavigation()
    const route = useRoute()
    const { diet } = route.params as RouteParams

    function handleGoToHome() {
        navigation.navigate("home")
    }
    
    return (
        <Container>
            <Content>            
                {diet === "in" && (
                    <>
                        <Title typeColor="PRIMARY">Continue assim!</Title>
                        <Description>Você continua dentro da dieta. Muito bem!</Description>
                    </>
                )}
                {diet === "out" && (
                    <>
                        <Title typeColor="SECONDARY">Que pena!</Title>
                        <Description>Você saiu da dieta dessa vez, mas continue se esforçando e não desista!</Description>
                    </>
                )}
            </Content> 
                {diet === "in" && (
                    <ImageBox source={HappyPng}/>
                )}
                {diet === "out" && (
                    <ImageBox source={SadPng}/>
                )}
            
            <Button title="Ir para a página inicial" onPress={handleGoToHome}/>
        </Container>
    )
}