import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealsModel } from "./mealsModel";

export async function mealsGetAllStats() {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION)
        const meals: MealsModel[] = storage ? JSON.parse(storage) : []

        const totalMeals = meals.length
        const inDiet = meals.filter(meals => meals.diet === "in").length
        const percTotal = (inDiet / totalMeals) * 100

        return { total: percTotal.toFixed(0) }
    } catch (error) {
        throw error;
    }
}