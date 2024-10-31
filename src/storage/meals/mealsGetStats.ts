import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealsModel } from "./mealsModel";

export async function mealsGetStats() {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION)
        const meals: MealsModel[] = storage ? JSON.parse(storage) : []

        const totalMeals = meals.length
        const inDiet = meals.filter(meals => meals.diet === "in").length
        const outDiet = meals.filter(meals => meals.diet === "out").length
        const maxSeq = maiorSequencia(meals, "in")
        const total = (inDiet / totalMeals) * 100

        return { 
            total: totalMeals,  
            in: inDiet,  
            out: outDiet,  
            perc: total.toFixed(0),
            seq: maxSeq
        }
    } catch (error) {
        throw error;
    }
}

function maiorSequencia(array: MealsModel[], valor: string) {
    let maxSequencia = 0;
    let currentSequencia = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].diet === valor) {
            currentSequencia++;
            maxSequencia = Math.max(maxSequencia, currentSequencia);
        } else {
            currentSequencia = 0;
        }
    }

    return maxSequencia;
}