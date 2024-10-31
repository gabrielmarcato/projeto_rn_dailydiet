import { useCallback, useState } from "react"
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"

import { 
    Container, 
    Content, 
    Form, 
    Title, 
    Description, 
    Label,
    Flag,
    FlagText,
    FlagStatus,
    ButtonContent
} from "./styles"

import { ButtonIcon } from "@components/ButtonIcon"
import { Header } from "@components/Header"

import { mealsGetById } from "@storage/meals/mealsGetById"
import { MealsModel } from "@storage/meals/mealsModel"
import { mealsRemoveById } from "@storage/meals/mealsRemoveById"

type RouteParams = {
    id: string
    diet: string
}

export function FormPreview() {
    const navigation = useNavigation()
    const route = useRoute()
    const { id, diet } = route.params as RouteParams

    const [meal, setMeal] = useState<MealsModel>()

    function handleGoBack() {
        navigation.goBack()
    }

    function handleGoEdit() {
        navigation.navigate("meals", {
            id: id,
            meals: meal
        })
    }

    async function fetchById() {
        try {
            const response = await mealsGetById(id)
            setMeal(response)
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchRemoveMeal() {
        try {
            await mealsRemoveById(id)
            navigation.navigate('home')
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchById()
    }, []))
    
    return (
        <Container typeColor={diet === "in" ? "PRIMARY" : "SECONDARY"}>
            <Header title="Refeição" onBack={handleGoBack}/>
            <Content>
                <Form>
                    <Title>{meal?.name}</Title>
                    <Description>{meal?.description}</Description>
                    <Label>Data e hora</Label>
                    <Description>{meal?.date} ás {meal?.hour}</Description>
                    <Flag>
                        <FlagStatus typeColor={diet === "in" ? "PRIMARY" : "SECONDARY"}/>
                        {(diet === "in") && (
                            <FlagText>dentro da dieta</FlagText>
                        )}
                        {(diet === "out") && (
                            <FlagText>fora da dieta</FlagText>
                        )}                    
                    </Flag>
                </Form>
                <ButtonContent>
                    <ButtonIcon title="Editar refeição" type="edit" style={{ marginBottom: 10 }} onPress={handleGoEdit}/>
                    <ButtonIcon title="Excluir refeição" type="remove" onPress={fetchRemoveMeal}/>
                </ButtonContent>
            </Content>
        </Container>
    )
}