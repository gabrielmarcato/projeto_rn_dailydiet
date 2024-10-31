import { Alert } from "react-native"
import { useCallback, useState } from "react"

import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"

import { Container, Content } from "./styles"

import { Button } from "@components/Button"
import { ButtonSelect } from "@components/ButtonSelect"
import { Header } from "@components/Header"
import { Input } from "@components/Input"

import { MealsModel } from "@storage/meals/mealsModel"
import { mealsCreate } from "@storage/meals/mealsCreate"
import { InputMask } from "@components/InputMask"
import { mealsEditById } from "@storage/meals/mealsEditById"

type RouteParams = {
    id: string,
    meals: MealsModel
}

export function FormMeals() {
    const navigation = useNavigation()
    const route = useRoute()
    const params = route.params as RouteParams
    
    const [isDiet, setIsDiet] = useState<string>("");
    const [name, setName] = useState<string>("")
    const [descripition, setDescripition] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [hour, setHour] = useState<string>("")

    function handleGoBack() {
        navigation.goBack()
    }

    async function handleSendForm() {
        if(name.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Informe o nome da refeição')
        }
        if(descripition.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Informe a descrição da refeição')
        }
        if(date.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Informe a data da refeição')
        }
        if(hour.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Informe a hora da refeição')
        }
        if(isDiet.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Selecione a dieta da refeição')
        }

        try {
            if(params?.id) {
                const data: MealsModel = {
                    id: params?.id,
                    name: name,
                    description: descripition,
                    date: date,
                    hour: hour,
                    diet: isDiet
                }
                await mealsEditById(data)
                navigation.navigate("finish", {diet: isDiet})
            } else {
                const data: MealsModel = {
                    name: name,
                    description: descripition,
                    date: date,
                    hour: hour,
                    diet: isDiet
                }
                await mealsCreate(data)
                navigation.navigate("finish", {diet: isDiet})
            }
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        if(params?.meals) {
            setIsDiet(params?.meals.diet ?? "")
            setName(params?.meals.name ?? "")
            setDescripition(params?.meals.description ?? "")
            setDate(params?.meals.date ?? "")
            setHour(params?.meals.hour ?? "")
        }
    }, []))

    return (
        <Container>
            <Header title={params?.id ? "Editar refeição" : "Nova refeição"} onBack={handleGoBack}/>
            <Content>
                <Input 
                    label="Nome" 
                    value={name} 
                    onChangeText={setName}
                />
                <Input 
                    label="Descrição" 
                    value={descripition} 
                    onChangeText={setDescripition} 
                    multiline={true}
                    numberOfLines={5}
                    style={{ height: 120 }}
                />
                <InputMask 
                    mask="99/99/9999" 
                    label="Data" 
                    value={date} 
                    onChangeText={setDate} 
                    keyboardType="numeric"
                />
                <InputMask 
                    mask="99:99" 
                    label="Hora" 
                    value={hour} 
                    onChangeText={setHour} 
                    keyboardType="numeric"
                />
                <ButtonSelect 
                    OnSelected={(item: string) => setIsDiet(item)}
                    OnSelect={params?.meals?.diet ?? ""}
                />
                <Button 
                    title={params?.id ? "Salvar alterações" : "Cadastrar refeição"} 
                    onPress={handleSendForm}
                />
            </Content>
        </Container>
    )
}