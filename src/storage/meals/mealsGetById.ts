import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealsModel } from "./mealsModel";

export async function mealsGetById(id: string) {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION)
        const meals: MealsModel[] = storage ? JSON.parse(storage) : []
        const data = meals.filter(meals => meals.id === id)
        return data[0]
    } catch (error) {
        throw error;
    }
}