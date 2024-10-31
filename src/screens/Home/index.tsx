import { useCallback, useState } from "react"
import { SectionList } from "react-native"

import { Container, TitleText, HeaderSection } from "./styles"

import { useFocusEffect, useNavigation } from "@react-navigation/native"

import { HeaderHome } from "@components/HeaderHome"
import { PorcentageBox } from "@components/PorcentageBox"
import { ButtonIcon } from "@components/ButtonIcon"
import { CardMeals } from "@components/CardMeals"

import { mealsGetAllGroup } from "@storage/meals/mealsGetAllGroup"
import { mealsGetAllStats } from "@storage/meals/mealsGetAllStats"

export function Home() {
    const navigation = useNavigation()

    const [meals, setMeals] = useState<any[]>([])
    const [stats, setStats] = useState<string>("")

    function handleOpenCreateMeal() {
        navigation.navigate('meals', {})
    }

    function handleOpenStats() {
        navigation.navigate('stats')
    }

    function handleOpenPreview(id: string, diet: string) {
        navigation.navigate('preview', { 
            id,
            diet
        })
    }

    async function fetchMeals(){
        try {
            const response = await mealsGetAllGroup()
            setMeals(response)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchMealsStats() {
        const response = await mealsGetAllStats()
        setStats(String(response.total))
    }

    useFocusEffect(useCallback(() => {
        fetchMeals()
        fetchMealsStats()
    }, []))

    return (
        <Container>
            <HeaderHome />
            <PorcentageBox porcentage={stats} onPress={handleOpenStats}/>
            <TitleText>Refeições</TitleText>
            <ButtonIcon title="Nova refeição" type="new" onPress={handleOpenCreateMeal}/>
            <SectionList 
                sections={meals}
                keyExtractor={item => item.id}
                renderItem={(section) => (
                    <CardMeals 
                        type={section.item.diet} 
                        hour={section.item.hour} 
                        description={section.item.name} 
                        onPress={() => handleOpenPreview(section.item.id, section.item.diet)}
                    />
                )}
                renderSectionHeader={({ section }) => (
                    <HeaderSection>{section.title}</HeaderSection>
                )}
                style={{ marginVertical: 20 }}
                showsVerticalScrollIndicator={false}
            />
            
        </Container>
    )
}